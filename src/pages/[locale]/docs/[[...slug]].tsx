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
import type { GetStaticPaths } from "next";
import { docs } from "@site/docs.config";
import { PageInfo, SidebarItem, TOCItem } from "@site/types";
import { DocPage } from "@site/components/DocPage";
import { getDocStaticPaths, getDocStaticProps } from "@site/utils/docs";
import { ParsedUrlQuery } from "querystring";

const Docs: React.FC<{
  page: PageInfo;
  source: MDXRemoteSerializeResult;
  tocItems: TOCItem[];
  sidebar: SidebarItem[];
  locale: string;
}> = (props) => {
  return <DocPage {...props} />;
};

export const getStaticProps = async (context: {
  params: { locale: string; slug: string[] };
}) => {
  return getDocStaticProps(context.params.slug, context.params.locale);
};

export const getStaticPaths = (async () => {
  const locales: string[] = [...docs.i18n.locales];
  locales.splice(
    locales.findIndex((v) => v === docs.i18n.defaultLocale),
    1,
  );
  const paths = await getDocStaticPaths();
  const rs: Array<string | { params: ParsedUrlQuery; locale?: string }> = [];
  locales.forEach((locale) => {
    paths.forEach((p) => {
      rs.push({
        params: {
          locale: locale,
          slug: p.params.slug,
        },
      });
    });
  });
  return {
    paths: rs,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export default Docs;
