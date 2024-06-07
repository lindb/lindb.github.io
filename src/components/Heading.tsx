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
import clsx from "clsx";
import { getHeadingId } from "@site/utils/utils";
import Link from "next/link";

export const Heading = ({ level, children, className = "", ...props }) => {
  if (typeof children !== "string") {
    return children;
  }

  const Component = `h${level}` as `h${1 | 2 | 3 | 4 | 5 | 6}`;
  const idText = getHeadingId(children);
  const renderContent = () => {
    switch (children) {
      case "Footnotes":
        //HACK: mdx footnotes heading
        return "Reference";
      default:
        return children;
    }
  };
  return (
    <Component
      // className={clsx({ "text-base": children === "Footnotes" })}
      // className={clsx("not-prose flex whitespace-pre-wrap", className, {
      //   "mb-2 text-sm leading-6 text-sky-500 font-semibold tracking-normal dark:text-sky-400":
      //     level === 2 &&
      //     nextElement?.type === "heading" &&
      //     nextElement?.depth === 3,
      // })}
      id={idText}
      // style={{ ...(hidden ? { marginBottom: 0 } : {}), ...style }}
      // data-docsearch-ignore={ignore ? "" : undefined}
      {...props}
    >
      <Link
        className={clsx("group relative border-none", "lg:-ml-2 lg:pl-2")}
        href={`#${idText}`}
      >
        <span className="absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex">
          &#8203;
          <span
            className={clsx(
              "flex size-6 items-center justify-center rounded-md text-slate-400 shadow-sm ring-1 ring-slate-900/5 hover:text-slate-700 hover:shadow hover:ring-slate-900/10",
              "dark:bg-slate-800 dark:text-slate-400 dark:shadow-none dark:ring-0 dark:hover:bg-slate-700 dark:hover:text-slate-200",
            )}
          >
            <svg width="12" height="12" fill="none" aria-hidden="true">
              <path
                d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </span>
        {children}
      </Link>
    </Component>
  );
};
