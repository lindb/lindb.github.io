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
    let url = "https://api.github.com/repos/lindb/lindb/releases";
    if (isDev()) {
      url =
        "https://raw.githubusercontent.com/stone1100/lindb.github.io/new_doc/src/pages/downloads/releases.json";
    }
    const res = await fetch(url);
    releases = await res.json();
    for (const r of releases || []) {
      r.body = (await compile(r.body)).source;
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
