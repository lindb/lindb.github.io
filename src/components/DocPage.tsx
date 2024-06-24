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
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { getDocPages } from "@site/utils/utils";
import { DocContainer, MetaTitle, NavSidebar, Sidebar } from "@site/components";
import { PageInfo, ReleaseInfo, SidebarItem, TOCItem } from "@site/types";
import { RocketLaunchIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "next-i18next";

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
      title: t("Releases"),
      href: "/docs/lindb/release-notes",
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
      <main className="flex flex-1 pt-4">
        <div className="mx-auto flex max-w-8xl flex-1 flex-col px-4 sm:px-6 md:px-8">
          <Sidebar
            sidebarItems={sidebar}
            locale={locale}
            topSidebar={topSidebar}
          />
          <div className="flex-1 lg:pl-36 xl:pl-[19.5rem]">
            <DocContainer
              releases={releases}
              locale={locale}
              page={page}
              source={source}
              tocItems={tocItems}
              pages={getDocPages(sidebar)}
            />
          </div>
        </div>
      </main>
    </>
  );
};
