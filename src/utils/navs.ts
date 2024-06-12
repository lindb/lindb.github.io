/*
Licensed to LinDB under one or more contributor
license agreements. See the NOTICE file distributed with
this work for additional information regarding copyright
ownership. LinDB licenses this file to you under
the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
 
Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/
import fs from "fs";
import path from "path";
import { CommitInfo, PageInfo, SidebarItem } from "@site/types";
import { execSync } from "child_process";
import { docs } from "@site/docs.config";
import { loadFile } from "./mdx";

export const currentWorkingDirectory = process.cwd();
export const docsPath = path.join(currentWorkingDirectory, "docs");
const pageCache = new Map<string, PageInfo>();

export const getPage = (
  locale: string,
  slug: string[],
): PageInfo | undefined => {
  const urlPath = "/" + [locale, "docs", ...slug].join("/");
  let page = pageCache.get(urlPath);
  if (!page) {
    // get default locale page
    const urlPath = "/" + [docs.i18n.defaultLocale, "docs", ...slug].join("/");
    page = pageCache.get(urlPath);
  }
  return page;
};
export const getLatestCommitInfo = (
  filePath: string,
): CommitInfo | undefined => {
  try {
    const author = execSync(`git log -1 --pretty=format:'%an' -- ${filePath}`)
      .toString()
      .trim();
    const date = execSync(
      `git log -1 --pretty=format:'%ad' --date=local -- ${filePath}`,
    )
      .toString()
      .trim();

    return {
      author: author,
      date: date,
    };
  } catch (error) {
    console.error("error getting latest commit info:", error);
    return undefined;
  }
};

const getFilename = (filename: string) => {
  return filename.replace(/^\d+-/, "").replace(/\.mdx$/, "");
};

const getFileIndex = (filename: string) => {
  const rs = filename.match(/^(\d+)/);
  if (rs && rs.length > 0) {
    return parseInt(rs[0], 10);
  }
  return 0;
};

export const getFilePath = (locale: string, pagePath: string) => {
  const defaultPageFile = path.join(currentWorkingDirectory, pagePath);
  let filePath = defaultPageFile;
  if (locale && locale !== docs.i18n.defaultLocale) {
    filePath = path.join(currentWorkingDirectory, "i18n", locale, pagePath);
  }
  if (!fs.existsSync(filePath)) {
    filePath = defaultPageFile;
  }
  return filePath;
};

const nameToTitle = (name: string) => {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
};

const readDirRecursive = (
  locale: string,
  directory: string,
  parent: SidebarItem | null,
) => {
  if (!fs.existsSync(directory)) {
    return;
  }
  const files = fs.readdirSync(directory);
  files.forEach((file) => {
    const name = getFilename(file);
    const sidebarItem: SidebarItem = {
      index: getFileIndex(file),
      title: nameToTitle(name),
      children: [],
    };
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isDirectory()) {
      readDirRecursive(locale, filePath, sidebarItem);
      sidebarItem.children?.sort((a, b) => a.index - b.index);
    } else if (path.extname(file).toLowerCase() === ".mdx") {
      const pagePath = filePath.replace(currentWorkingDirectory, "");
      sidebarItem.href =
        "/" +
        locale +
        pagePath.replace(/\/\d+-(\w+)/g, "/$1").replace(/\.mdx$/, "");
      const mdxFile = loadFile(locale, pagePath);
      sidebarItem.title = mdxFile.meta.sidebar
        ? mdxFile.meta.sidebar
        : mdxFile.meta.title
          ? mdxFile.meta.title
          : sidebarItem.title;
      // cache doc page meta info
      if (!pageCache.has(sidebarItem.href)) {
        pageCache.set(sidebarItem.href, {
          path: pagePath,
          meta: mdxFile.meta,
          title: sidebarItem.title,
          parent: parent?.title || "",
        });
      }
    }
    if (parent) {
      parent.children?.push(sidebarItem);
    }
  });
};

export const getSidebar = (locale: string, slug: string[]): SidebarItem[] => {
  const result: SidebarItem[] = [];
  if (slug.length == 0) {
    return result;
  }
  const product = slug[0];
  const productPage: SidebarItem = {
    index: 0,
    title: product,
    children: [],
  };
  readDirRecursive(locale, path.join(docsPath, product), productPage);
  productPage.children?.sort(
    (a: SidebarItem, b: SidebarItem) => a.index - b.index,
  );
  return productPage.children || [];
};

export const exportDocsPath = (
  directory: string,
  parent: string[],
  docsPath: string[][],
): string[][] => {
  if (!fs.existsSync(directory)) {
    return [];
  }
  const files = fs.readdirSync(directory);
  for (const idx in files) {
    const file = files[idx];
    const filePath = path.join(directory, file);
    const slug = getFilename(file);
    if (fs.statSync(filePath).isDirectory()) {
      exportDocsPath(filePath, [...parent, slug], docsPath);
    } else if (path.extname(file).toLowerCase() === ".mdx") {
      docsPath.push([...parent, slug]);
    }
  }
  return docsPath;
};
