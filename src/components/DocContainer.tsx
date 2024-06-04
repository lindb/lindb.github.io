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
import { MDXRemote } from "next-mdx-remote/rsc";
import { DocsFooter, CodeSnippet, Heading, DocHeader } from "@site/components";
import Link from "next/link";
import rehypeShiki from "@shikijs/rehype";
import remarkGfm from "remark-gfm";
import clsx from "clsx";
import { PageInfo } from "@site/navs/documentation";

export interface TOCItem {
  title: string;
  level: number;
}

const TableOfContents = (props: { tocItems: TOCItem[] }) => {
  const { tocItems } = props;
  return (
    <div className="fixed bottom-0 right-[max(0px,calc(50%-45rem))] top-[3.8125rem] z-20 hidden w-[19.5rem] overflow-y-auto py-10 xl:block">
      <div className="px-8">
        <h5 className="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
          On this page
        </h5>
        <ul className="text-sm leading-6 text-slate-700">
          {tocItems.map((item: TOCItem, idx: number) => {
            const idText = item.title.replace(/ /g, "_").toLowerCase();
            return (
              <li key={idx}>
                <a
                  href={`#${idText}`}
                  className={clsx(
                    "block py-1",
                    {
                      "ml-4": item.level > 2,
                      "group flex items-start py-1": item.level > 2,
                    },
                    "hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300",
                  )}
                >
                  {item.level > 2 && (
                    <svg
                      width="3"
                      height="24"
                      viewBox="0 -9 3 24"
                      className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
                    >
                      <path
                        d="M0 0L3 3L0 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="border-t border-slate-200 pt-3 text-sm leading-6 text-slate-700 sm:flex dark:border-slate-200/5">
          <Link
            href={"/github"}
            className="flex items-center hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
          >
            <svg
              viewBox="0 0 16 16"
              className="size-5 pr-2"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Edit this page on Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export const DocContainer: React.FC<{
  page: PageInfo;
  source: any;
  tocItems?: TOCItem[];
  pages: PageInfo[];
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
        className="prose prose-slate relative z-20 mt-8 dark:prose-dark"
      >
        <MDXRemote
          source={source}
          components={{
            CodeSnippet,
            ...headingComponents,
            table: (props) => (
              <table {...props} className="markdown-table">
                {props.children}
              </table>
            ),
          }}
          options={{
            mdxOptions: {
              remarkPlugins: [
                [
                  remarkGfm,
                  {
                    footnotes: { labelTagName: "h4" },
                  },
                ],
              ],
              rehypePlugins: [
                [
                  rehypeShiki,
                  {
                    // ref: https://shiki.style/themes
                    themes: {
                      light: "catppuccin-macchiato",
                      dark: "catppuccin-macchiato",
                    },
                    colorReplacements: { "#24273a": "#1e293b" },
                  },
                ],
              ],
            },
            parseFrontmatter: true,
          }}
        />
      </div>
      <DocsFooter pages={pages} />
      {tocItems && <TableOfContents tocItems={tocItems} />}
    </div>
  );
};
