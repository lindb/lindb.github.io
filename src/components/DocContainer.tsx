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
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { GithubIcon } from "@site/icons";

export interface TOCItem {
  title: string;
  level: number;
}

const TableOfContents = (props: { tocItems: TOCItem[] }) => {
  const { tocItems } = props;
  const Content = () => {
    return (
      <div className="px-2 xl:px-8">
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
            <GithubIcon className="mr-2 size-4" />
            Edit this page on Github
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Popover className="group fixed bottom-0 right-6 top-16 z-20 block h-6 border border-slate-500 bg-white shadow-md lg:right-12 lg:top-24 xl:hidden dark:bg-slate-800">
        <PopoverButton className="flex items-center gap-2">
          <BookOpenIcon className="size-6 fill-slate-400/20 stroke-slate-600 dark:fill-slate-500/20 dark:stroke-slate-400" />
        </PopoverButton>
        <PopoverPanel
          anchor="bottom"
          className="z-20 mr-3 mt-1 w-full max-w-xs rounded-sm bg-white p-4  ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-slate-400  dark:ring-slate-500/20"
        >
          <Content />
        </PopoverPanel>
      </Popover>
      <div className="fixed bottom-0 right-[max(0px,calc(50%-45rem))] top-[3.8125rem] z-20 hidden w-[19.5rem] overflow-y-auto py-10 xl:block">
        <Content />
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
                      // light: "github-light",
                      light: "material-theme-lighter",
                      // light: "catppuccin-latte",
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
