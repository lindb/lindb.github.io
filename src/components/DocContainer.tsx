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
"use client";

import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  DocsFooter,
  CodeSnippet,
  Heading,
  DocHeader,
  TableOfContents,
} from "@site/components";
import { PageInfo, SidebarItem, TOCItem } from "@site/types";
import "remark-github-blockquote-alert/alert.css";

export const DocContainer: React.FC<{
  page: PageInfo;
  source: MDXRemoteSerializeResult;
  tocItems?: TOCItem[];
  pages: SidebarItem[];
}> = (props) => {
  const { page, source, tocItems, pages } = props;
  const headingComponents: object = {};
  for (let i = 1; i <= 6; i++) {
    headingComponents[`h${i}`] = (props) => {
      return <Heading level={i} {...props} />;
    };
  }
  return (
    <div className="mx-auto max-w-3xl xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
      <DocHeader page={page} />
      <div
        id="content-wrapper"
        className="prose prose-slate relative mt-8 dark:prose-dark"
      >
        <MDXRemote
          {...source}
          components={{
            CodeSnippet,
            ...headingComponents,
            table: (props) => (
              // eslint-disable-next-line tailwindcss/no-custom-classname
              <table {...props} className="markdown-table">
                {props.children}
              </table>
            ),
          }}
        />
      </div>
      <DocsFooter pages={pages} />
      {tocItems && <TableOfContents tocItems={tocItems} />}
    </div>
  );
};
