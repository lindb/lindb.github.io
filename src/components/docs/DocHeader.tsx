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
import { PageInfo } from "@site/types";
import React from "react";
import { useTranslation } from "next-i18next";

export const DocHeader: React.FC<{
  page: PageInfo;
}> = (props) => {
  const { page } = props;
  const { t } = useTranslation();
  if (!page.meta && !page.parent) return null;
  return (
    <header className="border-b border-base-content/10 pb-2">
      <div>
        {page.parent && (
          <p className="mb-2 hidden text-sm leading-6 font-semibold">
            {t(page.parent)}
          </p>
        )}
        {page.meta && page.meta.title && (
          <div className="flex items-center">
            <h1 className="inline-block text-2xl font-extrabold tracking-tight  sm:text-3xl">
              {page.meta.title}
            </h1>
          </div>
        )}
      </div>
      {page.commitInfo && page.commitInfo.author && (
        <div className="mt-1 text-sm italic">
          Last updated on{" "}
          <span className="font-medium underline decoration-primary">
            {page.commitInfo.date}
          </span>{" "}
          by{" "}
          <span className="font-medium underline decoration-primary">
            {page.commitInfo.author}
          </span>
        </div>
      )}
      {page.meta && page.meta.description && (
        <p className="mt-2 text-sm italic">{page.meta.description}</p>
      )}
    </header>
  );
};
