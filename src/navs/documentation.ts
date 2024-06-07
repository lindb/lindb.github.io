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
import matter from "gray-matter";
import { DocMeta, CommitInfo } from "@site/components";
import { execSync } from "child_process";
import { docs } from "@site/docs.config";

export const currentWorkingDirectory = process.cwd();
export const docsPath = "docs";

export interface PageInfo {
  product?: string;
  title?: string;
  lang?: string;
  slug?: string[];
  href?: string;
  meta?: DocMeta;
  commitInfo?: CommitInfo;
  children?: PageInfo[];
  parent?: PageInfo;
}

const getLatestCommitInfo = (filePath: string): CommitInfo | undefined => {
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

const readDirRecursive = (
  lang: string,
  product: string,
  baseDir: string,
  directory: string,
  pages: PageInfo[] = [],
): PageInfo[] => {
  if (!fs.existsSync(directory)) {
    return pages;
  }
  const files = fs.readdirSync(directory);
  files.forEach((file) => {
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isDirectory()) {
      readDirRecursive(lang, product, baseDir, filePath, pages);
    } else if (path.extname(file).toLowerCase() === ".mdx") {
      const commitInfo = getLatestCommitInfo(filePath);
      const source = fs.readFileSync(filePath);
      const { data: meta } = matter(source);
      const title = meta.sidebar ? meta.sidebar : meta.title;
      const fileName = filePath.replaceAll(baseDir, "");
      const slug = [
        ...fileName
          .replaceAll(baseDir, "")
          .replaceAll(".mdx", "")
          .split("/")
          .filter(
            (item) => item.trim() !== "" && item !== lang && item !== docsPath,
          ),
      ];
      pages.push({
        product: product,
        title: title,
        lang: lang,
        slug: slug,
        href: filePath.replaceAll(baseDir, "").replaceAll(".mdx", ""),
        meta: meta,
        commitInfo: commitInfo,
      });
    }
  });
  return pages;
};

const buildDocPages = () => {
  const baseDir = path.join(currentWorkingDirectory, "i18n");
  const pageCache = new Map<string, PageInfo>();
  const locales = docs.i18n.locales || [];
  locales.forEach((locale) => {
    docs.products.forEach((product) => {
      const pages = readDirRecursive(
        locale,
        product.name,
        baseDir,
        path.join(baseDir, locale, docsPath, product.name.toLowerCase()),
      );
      pages.forEach((page) => {
        if (page.href) {
          pageCache.set(page.href, page);
        }
      });
    });
  });
  return pageCache;
};

export const pages = buildDocPages();

export const getPath = (lang: string, slug: string[]) => {
  return "/" + [lang, docsPath, ...slug].join("/");
};

export const getSidebar = (lang: string, slug: string[]): PageInfo[] => {
  const result: PageInfo[] = [];
  if (slug.length == 0) {
    return result;
  }
  const product = slug[0];
  const sidebarCfg =
    docs.products.find((prod) => prod.name.toLowerCase() === product)
      ?.sidebar || [];
  sidebarCfg.forEach((item: string | object) => {
    if (typeof item === "string") {
      const href = "/" + [lang, docsPath, product, item].join("/");
      const page = pages.get(href);
      if (page) {
        result.push(page);
      }
    } else if (typeof item === "object") {
      const children = item["children"];
      const title = item["title"];
      if (title !== "" && children && children.length > 0) {
        const cate: PageInfo = { title: title };
        const cateChildren: PageInfo[] = [];
        cate.children = cateChildren;
        result.push(cate);
        children.forEach((child: string) => {
          const href = "/" + [lang, docsPath, product, child].join("/");
          const page = pages.get(href);
          if (page) {
            page.parent = cate;
            cateChildren.push(page);
          }
        });
      }
    }
  });

  return result;
};
