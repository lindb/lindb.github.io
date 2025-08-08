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
import React, { useContext, useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";

import { Bars3Icon, ChevronRightIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";

import { DocContext } from "@site/contexts";
import { docs } from "@site/docs.config";
import { DownArrowIcon, RightArrowIcon } from "@site/icons";
import { PageInfo, SidebarItem } from "@site/types";
import { addPathPrefix } from "@site/utils/utils";

import Link from "../Link";

const DocsSidebarItem: React.FC<{
  item: SidebarItem;
  level: number;
  mobile?: boolean;
  locale?: string;
  isChild?: boolean;
}> = (props) => {
  const { item, level, mobile, locale, isChild = true } = props;
  const pathname = usePathname();
  const { t } = useTranslation();
  const checkActive = (item: SidebarItem) =>
    pathname ===
    addPathPrefix(
      item.href || "",
      locale !== docs.i18n.defaultLocale ? locale : "",
    );
  const isActive = checkActive(item);
  const [collapsed, setCollapsed] = useState(
    // chekc if has child active
    () => !item.children?.some((item) => checkActive(item)),
  );

  if (!isChild && !item.href) {
    return null;
  }

  if (!isChild) {
    return (
      <li key={item.title} className="mt-4">
        <Link
          href={item.href || ""}
          className={classNames("-ml-px block", {
            "hover:bg-base-content/10": !isActive,
          })}
        >
          <h5
            className={classNames("mb-1 font-semibold", {
              "hover:bg-base-content/10": !isActive,
              "text-primary": isActive || mobile,
            })}
          >
            {item.title}
          </h5>
        </Link>
      </li>
    );
  }
  if (item.children && item.children.length > 0) {
    return (
      <li
        key={item.title || ""}
        className={classNames({
          "border-l  border-base-content/10": !isChild,
        })}
      >
        <div
          className="ml-2 flex cursor-pointer items-center rounded-sm px-2 py-1 hover:bg-base-content/10"
          onClick={() => setCollapsed(!collapsed)}
        >
          <span className="flex-1">{t(item.title)}</span>
          {collapsed ? <RightArrowIcon /> : <DownArrowIcon />}
        </div>
        <ul className={classNames(collapsed ? "hidden" : "block")}>
          {(item.children || []).map((item: SidebarItem) => (
            <DocsSidebarItem key={item.title} item={item} level={level + 1} />
          ))}
        </ul>
      </li>
    );
  }
  const plClass =
    ["pl-2", "pl-4", "pl-6", "pl-8", "pl-10", "pl-12", "pl-14", "pl-16"][
      level
    ] || "pl-2";
  return (
    <li
      key={item.title || ""}
      className={classNames({
        "border-l": !isChild,
      })}
    >
      <Link
        href={item.href || ""}
        className={classNames("-ml-px block border-l", plClass, {
          "text-primary border-primary font-semibold": isActive || mobile,
          "border-transparent hover:border-primary": !isActive,
        })}
      >
        <div className="rounded-sm px-2 py-1 hover:bg-base-content/10">
          {t(item.title)}
        </div>
      </Link>
    </li>
  );
};

const DocsSidebar: React.FC<{
  sidebarItems: SidebarItem[];
  mobile?: boolean;
  locale?: string;
}> = (props) => {
  const { sidebarItems, mobile, locale } = props;
  const { t } = useTranslation();

  const render = (page: SidebarItem) => {
    if (page.children && page.children.length > 0) {
      return (
        <li key={page.title} className="mt-2">
          <h5 className="font-semibold">{t(page.title)}</h5>
          <ul
            className={classNames(
              "border-l border-base-content/10",
              mobile ? "dark:border-slate-700" : "border-base-content/10",
            )}
          >
            {(page.children || []).map((item: SidebarItem) => (
              <DocsSidebarItem
                key={item.title}
                item={item}
                level={0}
                locale={locale}
              />
            ))}
          </ul>
        </li>
      );
    }
    return (
      <DocsSidebarItem item={page} level={0} isChild={false} locale={locale} />
    );
  };

  return (sidebarItems || []).map((item: SidebarItem) => render(item));
};

export const NavSidebar: React.FC<{
  sidebarItems: SidebarItem[];
  topSidebar?: SidebarItem[];
  page: PageInfo;
  locale?: string;
}> = (props) => {
  const { sidebarItems, topSidebar, locale, page } = props;
  const { sidebarOpen, setSidebarOpen } = useContext(DocContext);
  const pathname = usePathname();
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);
  return (
    <div className="sticky top-[64px] left-0 z-40 flex items-center border-b border-base-content/10 bg-base-100 p-2 lg:hidden">
      <div className="dropdown dropdown-start">
        <input
          id="sidebar-drawer"
          type="checkbox"
          checked={sidebarOpen}
          className="drawer-toggle"
          readOnly
        />
        <div className="drawer-content">
          <label htmlFor="sidebar-drawer">
            <ol className="flex min-w-0 items-center text-sm leading-6 whitespace-nowrap">
              <li className="mr-2 flex items-center">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <span className="sr-only">Navigation</span>
                  <Bars3Icon className="size-6" />
                </button>
              </li>
              {page.parent && (
                <li className="flex items-center">
                  {page.parent}
                  <ChevronRightIcon className="size-5" />
                </li>
              )}
              <li className="truncate font-semibold">{page.title}</li>
            </ol>
          </label>
        </div>
        <div className="drawer-side z-40 mt-[105px]">
          <label
            htmlFor="toc-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={() => setSidebarOpen(false)}
          ></label>
          <div className="min-h-full w-full bg-base-200 p-2 text-base-content">
            <Sidebar
              topSidebar={topSidebar}
              sidebarItems={sidebarItems}
              mobile={sidebarOpen}
              locale={locale}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Sidebar: React.FC<{
  sidebarItems: SidebarItem[];
  topSidebar?: SidebarItem[];
  mobile?: boolean;
  locale?: string;
  onClick?: () => void;
}> = (props) => {
  const { sidebarItems, topSidebar = [], locale, mobile = false } = props;
  const pathname = usePathname();
  return (
    <div
      className={classNames("z-2 overflow-y-auto h-full pb-10", {
        "px-2": mobile,
        "w-72 fixed lg:block top-[70px] px-4 left-0 hidden": !mobile,
      })}
    >
      <nav className="relative lg:pt-2 lg:text-sm lg:leading-6">
        <ul>
          {topSidebar.map((item) => {
            const active =
              pathname ===
              addPathPrefix(
                item.href || "",
                locale !== docs.i18n.defaultLocale ? locale : "",
              );
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={classNames(
                    "group mb-2 flex items-center font-semibold lg:text-sm",
                    {
                      "text-primary font-semibold": active,
                    },
                  )}
                >
                  <div
                    className={classNames(
                      "rounded-md border border-base-content/10 p-1",
                    )}
                  >
                    {item.icon}
                  </div>
                  <div className="mx-2 flex-1 rounded-sm px-2 py-1 group-hover:bg-base-content/10">
                    {item.title}
                  </div>
                </Link>
              </li>
            );
          })}
          <DocsSidebar sidebarItems={sidebarItems} locale={locale} />
        </ul>
      </nav>
    </div>
  );
};
