/**
 * Licensed to LinDB under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. LinDB licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 		http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
"use client";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import {
  CodeSnippet,
  DocHeader,
  DocsFooter,
  Heading,
  Image,
} from "@site/components";
import { PageInfo, ReleaseInfo, SidebarItem, TOCItem } from "@site/types";

import { Footer } from "../Footer";
import Link from "../Link";
import { ReleaseNotes } from "./ReleaseNotes";

import "remark-github-blockquote-alert/alert.css";

export const DocContainer: React.FC<{
  locale: string;
  page: PageInfo;
  source: MDXRemoteSerializeResult;
  tocItems?: TOCItem[];
  pages: SidebarItem[];
  releases?: ReleaseInfo[];
}> = (props) => {
  const { page, source, pages, releases } = props;
  const headingComponents: object = {};
  for (let i = 1; i <= 6; i++) {
    headingComponents[`h${i}`] = (props) => {
      return <Heading level={i} {...props} />;
    };
  }
  return (
    <div className="flex flex-col">
      <DocHeader page={page} />
      <div className="relative prose prose-lin mt-8 prose-slate dark:prose-dark">
        <MDXRemote
          {...source}
          components={{
            CodeSnippet,
            ...headingComponents,
            table: (props) => (
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
            TabGroup: (props) => {
              const router = useRouter();
              const tab = router.query.tab;
              // eslint-disable-next-line react/prop-types
              const { items = [] } = props;
              const [selected, setSelected] = useState(0);
              useEffect(() => {
                const idx = items.findIndex((v: string) => v === tab);
                if (idx >= 0) {
                  setSelected(idx);
                }
              }, [tab]);
              return (
                <TabGroup
                  {...props}
                  selectedIndex={selected}
                  onChange={setSelected}
                >
                  {props.children}
                </TabGroup>
              );
            },
            TabList: (props) => {
              return (
                <TabList className="border-b border-base-content/10" {...props}>
                  {props.children}
                </TabList>
              );
            },
            Tab: (props) => (
              <Tab
                {...props}
                className="border-b border-sky-400/0 px-3 py-2 text-sm/6 leading-6 font-semibold text-base-content focus:outline-none data-[hover]:border-base-content/30 data-[selected]:border-primary data-[selected]:text-primary"
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
      <Footer />
    </div>
  );
};
