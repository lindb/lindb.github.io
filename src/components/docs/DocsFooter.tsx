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
import React from "react";

import { usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";

import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { docs } from "@site/docs.config";
import { SidebarItem } from "@site/types";
import { addPathPrefix, getLocale } from "@site/utils/utils";

import Link from "../Link";

export const DocsFooter: React.FC<{ pages: SidebarItem[] }> = (props) => {
  const { pages } = props;
  const pathname = usePathname();
  const { t } = useTranslation();

  const { include, locale } = getLocale(pathname);
  const currentPageIdx = pages.findIndex(
    (p) =>
      addPathPrefix(
        p.href || "",
        include && locale !== docs.i18n.defaultLocale ? locale : "",
      ) === pathname,
  );
  const previousPage = currentPageIdx > 0 ? pages[currentPageIdx - 1] : null;
  const nextPage =
    currentPageIdx < pages.length ? pages[currentPageIdx + 1] : null;

  const editUrl = `${docs.docRepo}${pathname}.mdx`;

  return (
    <div className="mt-12 border-t border-base-content/10 pt-6 text-sm leading-6">
      {/* Edit on GitHub */}
      <div className="mb-6 flex justify-end">
        <Link
          href={editUrl}
          className="flex items-center gap-1.5 text-xs text-base-content/50 hover:text-base-content transition-colors"
        >
          <PencilSquareIcon className="h-3.5 w-3.5" />
          {t("Edit this page on GitHub")}
        </Link>
      </div>

      {/* Prev / Next navigation */}
      <div className="mb-10 flex items-stretch gap-4 font-semibold">
        {previousPage && (
          <Link
            href={previousPage.href || ""}
            className="flex-1 rounded-lg border border-base-content/10 bg-base-100 px-4 py-3 hover:bg-base-200/60 transition-colors"
          >
            <div className="text-xs font-normal text-base-content/50 mb-1">
              {t("Previous")}
            </div>
            <div className="flex items-center gap-1 text-sm">
              <ChevronLeftIcon className="h-4 w-4 shrink-0" />
              {previousPage.title}
            </div>
          </Link>
        )}
        {nextPage && (
          <Link
            href={nextPage.href || ""}
            className="flex-1 rounded-lg border border-base-content/10 bg-base-100 px-4 py-3 hover:bg-base-200/60 transition-colors text-right ml-auto"
          >
            <div className="text-xs font-normal text-base-content/50 mb-1">
              {t("Next")}
            </div>
            <div className="flex items-center justify-end gap-1 text-sm">
              {nextPage.title}
              <ChevronRightIcon className="h-4 w-4 shrink-0" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
