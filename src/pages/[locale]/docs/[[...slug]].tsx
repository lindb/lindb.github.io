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
import React from "react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  docsPath,
  exportDocsPath,
  getFilePath,
  getLatestCommitInfo,
  getPage,
  getSidebar,
} from "@site/utils/navs";
import type { GetStaticPaths } from "next";
import { getDocPages } from "@site/utils/utils";
import { ParsedUrlQuery } from "querystring";
import {
  DocContainer,
  Footer,
  MetaTitle,
  NavSidebar,
  Sidebar,
} from "@site/components";
import { docs } from "@site/docs.config";
import { PageInfo, SidebarItem, TOCItem } from "@site/types";
import { compile, loadFile } from "@site/utils/mdx";

const DocPage: React.FC<{
  page: PageInfo;
  source: MDXRemoteSerializeResult;
  tocItems: TOCItem[];
  sidebar: SidebarItem[];
  locale: string;
}> = (props) => {
  const { page, source, tocItems, sidebar, locale } = props;
  return (
    <>
      <MetaTitle title={page.title || "Docs"} />
      <NavSidebar sidebarItems={sidebar} page={page} />
      <main className="flex flex-1 pt-4">
        <div className="mx-auto flex max-w-8xl flex-1 flex-col px-4 sm:px-6 md:px-8">
          <Sidebar sidebarItems={sidebar} />
          <div className="flex-1 lg:pl-36 xl:pl-[19.5rem]">
            <DocContainer
              locale={locale}
              page={page}
              source={source}
              tocItems={tocItems}
              pages={getDocPages(sidebar)}
            />
          </div>
          <Footer className="flex lg:mx-8 lg:pl-36 xl:pl-[19.5rem]" />
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async (context: {
  params: { locale: string; slug: string[] };
}) => {
  const locale = context.params.locale;
  const slug = context.params.slug;
  const sidebar = getSidebar(locale, slug);
  const page = getPage(locale, slug);
  if (!page) {
    return {
      notFound: true,
    };
  }

  const mdxFile = loadFile(locale, page.path);
  const mdx = await compile(mdxFile.content);
  page.commitInfo = getLatestCommitInfo(getFilePath(locale, page.path));

  return {
    props: {
      page: page,
      source: mdx.source,
      tocItems: mdx.toc,
      sidebar: sidebar,
      locale: locale,
    },
  };
};

export const getStaticPaths = (() => {
  const paths: Array<string | { params: ParsedUrlQuery; locale?: string }> = [];
  const locales = docs.i18n.locales;
  const docsPages = exportDocsPath(docsPath, [], []);
  docsPages.forEach((page) => {
    locales.forEach((locale) => {
      paths.push({
        params: {
          locale: locale,
          slug: page,
        },
      });
    });
  });
  return {
    paths: paths,
    fallback: false, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export default DocPage;
