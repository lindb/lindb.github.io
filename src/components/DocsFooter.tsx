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
import clsx from "clsx";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "@site/navs/documentation";
import { usePathname } from "next/navigation";

export const DocsFooter: React.FC<{ pages: PageInfo[] }> = (props) => {
  const { pages } = props;
  const pathname = usePathname();
  const currentPageIdx = pages.findIndex((p) => p.href === pathname);
  const previousPage = currentPageIdx > 0 ? pages[currentPageIdx - 1] : null;
  const nextPage =
    currentPageIdx < pages.length ? pages[currentPageIdx + 1] : null;
  return (
    <div
      className={clsx(
        "mt-12 border-t border-slate-200 pt-6 text-sm leading-6 dark:border-slate-800",
      )}
    >
      <div className="mb-10 flex items-center font-semibold text-slate-700 dark:text-slate-200">
        {previousPage && (
          <div>
            <div className="ml-1 text-xs text-slate-900 dark:text-white">
              Previous
            </div>
            <Link
              href={previousPage.href || ""}
              className="group flex items-center text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <ChevronLeftIcon className="h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
              {previousPage.title}
            </Link>
          </div>
        )}
        {nextPage && (
          <div className="ml-auto text-right">
            <div className="mr-1 text-xs text-slate-900 dark:text-white">
              Next
            </div>
            <Link
              href={nextPage.href || ""}
              className="group flex items-center text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            >
              {nextPage.title}
              <ChevronRightIcon className="h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};