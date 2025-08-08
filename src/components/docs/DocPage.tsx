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

import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { useTranslation } from "next-i18next";

import { BookOpenIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

import { DocContainer, MetaTitle, TableOfContents } from "@site/components";
import { PageInfo, ReleaseInfo, SidebarItem, TOCItem } from "@site/types";
import { getDocPages } from "@site/utils/utils";

import { NavSidebar, Sidebar } from "./DocSidebar";

export const DocPage: React.FC<{
  page: PageInfo;
  source: MDXRemoteSerializeResult;
  tocItems: TOCItem[];
  sidebar: SidebarItem[];
  locale: string;
  releases?: ReleaseInfo[];
}> = (props) => {
  const { page, source, tocItems, sidebar, locale, releases } = props;
  const { t } = useTranslation();
  const topSidebar = [
    {
      index: 1,
      title: t("Introduction"),
      icon: (
        <BookOpenIcon className="size-4 fill-cyan-500 group-hover:fill-cyan-600" />
      ),
      href: "/docs/lindb/introduction",
    },
    {
      index: 2,
      title: t("Change Logs"),
      href: "/docs/lindb/change-logs",
      icon: (
        <RocketLaunchIcon className="size-4 fill-violet-400 group-hover:fill-violet-500" />
      ),
    },
  ];
  return (
    <>
      <MetaTitle title={page.title || "Docs"} />
      <NavSidebar
        sidebarItems={sidebar}
        page={page}
        locale={locale}
        topSidebar={topSidebar}
      />
      <main className="flex w-full">
        <div className="lg:w-72">
          <Sidebar
            sidebarItems={sidebar}
            locale={locale}
            topSidebar={topSidebar}
          />
        </div>
        <div className="mx-2 mt-4 flex-1 lg:mx-8">
          <DocContainer
            releases={releases}
            locale={locale}
            page={page}
            source={source}
            tocItems={tocItems}
            pages={getDocPages(sidebar)}
          />
        </div>
        {tocItems && (
          <div className="lg:w-72">
            <TableOfContents page={page} tocItems={tocItems} />
          </div>
        )}
      </main>
    </>
  );
};
