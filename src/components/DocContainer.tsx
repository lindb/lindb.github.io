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
  Image,
} from "@site/components";
import { PageInfo, ReleaseInfo, SidebarItem, TOCItem } from "@site/types";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import "remark-github-blockquote-alert/alert.css";
import Link from "./Link";
import { Footer } from "./Footer";
import { ReleaseNotes } from "./ReleaseNotes";

export const DocContainer: React.FC<{
  locale: string;
  page: PageInfo;
  source: MDXRemoteSerializeResult;
  tocItems?: TOCItem[];
  pages: SidebarItem[];
  releases?: ReleaseInfo[];
}> = (props) => {
  const { page, source, tocItems, pages, releases } = props;
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
            a: (props) => {
              return <Link {...props} />;
            },
            pre: (props) => {
              return <CodeSnippet {...props} />;
            },
            img: Image,
            TabGroup,
            TabList: (props) => (
              <TabList
                className="border-b border-slate-200 dark:border-slate-200/5"
                {...props}
              >
                {props.children}
              </TabList>
            ),
            Tab: (props) => (
              <Tab
                {...props}
                className="border-b border-sky-400/0 px-3 py-2 text-sm/6 font-semibold leading-6 text-white focus:outline-none data-[hover]:border-slate-300 data-[selected]:border-sky-400 data-[selected]:data-[hover]:text-sky-400 data-[selected]:text-sky-400 data-[hover]:dark:border-slate-700"
              >
                {props.children}
              </Tab>
            ),
            TabPanels: (props) => (
              <TabPanels {...props} className="m-3">
                {props.children}
              </TabPanels>
            ),
            TabPanel,
            ReleaseNotes: (props) => (
              <ReleaseNotes {...props} releases={releases} />
            ),
          }}
        />
      </div>
      <DocsFooter pages={pages} />
      {tocItems && <TableOfContents page={page} tocItems={tocItems} />}
      <Footer />
    </div>
  );
};
