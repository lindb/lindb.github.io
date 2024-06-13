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
import { PageInfo } from "@site/types";
import React from "react";
import { useTranslation } from "react-i18next";

export const DocHeader: React.FC<{
  page: PageInfo;
}> = (props) => {
  const { page } = props;
  const { t } = useTranslation();
  if (!page.meta && !page.parent) return null;
  return (
    <header
      id="header"
      className="relative border-b border-gray-200 pb-4 dark:border-gray-800 "
    >
      <div>
        {page.parent && (
          <p className="mb-2 hidden text-sm font-semibold leading-6 text-sky-500 lg:block dark:text-sky-400">
            {t(page.parent)}
          </p>
        )}
        {page.meta && page.meta.title && (
          <div className="flex items-center">
            <h1 className="inline-block text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-200">
              {page.meta.title}
            </h1>
          </div>
        )}
      </div>
      {page.commitInfo && page.commitInfo.author && (
        <div className="mt-1 text-sm italic">
          Last updated on{" "}
          <span className="font-medium text-slate-900 underline decoration-sky-500 dark:text-slate-200">
            {page.commitInfo.date}
          </span>{" "}
          by{" "}
          <span className="font-medium text-slate-900 underline decoration-sky-500 dark:text-slate-200">
            {page.commitInfo.author}
          </span>
        </div>
      )}
      {page.meta && page.meta.description && (
        <p className="mt-2 text-base italic text-slate-700 dark:text-slate-400">
          {page.meta.description}
        </p>
      )}
    </header>
  );
};
