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

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";

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
  return (
    <div
      className={classNames(
        "mt-12 border-t border-base-content/10 pt-6 text-sm leading-6",
      )}
    >
      <div className="mb-10 flex items-center font-semibold">
        {previousPage && (
          <div className="rounded-sm px-2 hover:bg-base-content/10">
            <div className="ml-1 text-xs text-base-content/50">
              {t("Previous")}
            </div>
            <Link href={previousPage.href || ""} className="flex items-center">
              <ChevronLeftIcon className="h-4" />
              {previousPage.title}
            </Link>
          </div>
        )}
        {nextPage && (
          <div className="ml-auto rounded-sm px-2 text-right hover:bg-base-content/10">
            <div className="mr-1 text-xs text-base-content/50">{t("Next")}</div>
            <Link href={nextPage.href || ""} className="flex items-center">
              {nextPage.title}
              <ChevronRightIcon className="h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
