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
import {
  docsPath,
  exportDocsPath,
  getFilePath,
  getLatestCommitInfo,
  getPage,
  getSidebar,
} from "./navs";
import { compile, loadFile } from "./mdx";
import { ParsedUrlQuery } from "querystring";
import { docs } from "@site/docs.config";
import { getI18nProps } from "./i18n";
import { isDev } from "./utils";
import { ReleaseInfo } from "@site/types";
import fs from "fs";

export const getReleases = async () => {
  if (isDev()) {
    if (isDev()) {
      const file = fs.readFileSync(process.cwd() + "/src/utils/releases.json");
      const data = JSON.parse(file.toString());
      return data;
    }
  }
  const url = "https://api.github.com/repos/lindb/lindb/releases?per_page=100";
  const res = await fetch(url);
  return await res.json();
};

export const getContributors = async () => {
  if (isDev()) {
    const file = fs.readFileSync(
      process.cwd() + "/src/utils/contributors.json",
    );
    const data = JSON.parse(file.toString());
    return data;
  }
  const url = "https://api.github.com/repos/lindb/lindb/contributors";
  const res = await fetch(url);
  return await res.json();
};

export const getDocStaticProps = async (slug: string[], locale?: string) => {
  const sidebar = getSidebar(locale || "", slug);
  const page = getPage(slug, locale);
  if (!page) {
    return {
      notFound: true,
    };
  }

  const mdxFile = loadFile(locale || "", page.path);
  const mdx = await compile(mdxFile.content);
  let releases: ReleaseInfo[] | null = null;
  let tocItem = mdx.toc;
  if (slug[slug.length - 1] === "release-notes") {
    const contributors = await getContributors();
    const contributorMap = new Map(contributors.map((obj) => [obj.login, obj]));
    releases = await getReleases();
    for (const r of releases || []) {
      const regex = /.* by @(\S+) /g;
      let match;

      const rContributros = new Map();
      // console.log(r.name, r.body);
      while ((match = regex.exec(r.body)) !== null) {
        const k = match[1];
        if (!rContributros.has(k) && contributorMap.has(k)) {
          rContributros.set(k, contributorMap.get(k));
        }
      }
      r.mdxBody = (await compile(r.body)).source;
      r.body = "";
      r.contributors = Array.from(rContributros.values());
    }
    tocItem = (releases || []).map((r) => {
      return {
        level: 2,
        id: r.name,
        title: r.name,
      };
    });
  }
  page.commitInfo = getLatestCommitInfo(getFilePath(locale || "", page.path));
  const props = {
    props: {
      page: page,
      source: mdx.source,
      tocItems: tocItem,
      releases: releases,
      sidebar: sidebar,
      locale: locale || "",
      ...(await getI18nProps(locale || docs.i18n.defaultLocale)),
    },
  };
  // let the client fetch the translations
  return props;
};

export const getDocStaticPaths = async () => {
  const paths: Array<{ params: ParsedUrlQuery }> = [];
  const docsPages = exportDocsPath(docsPath, [], []);
  docsPages.forEach((page) => {
    paths.push({
      params: {
        slug: page,
      },
    });
  });
  return paths;
};
