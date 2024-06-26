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
import React, { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { PageInfo, SidebarItem } from "@site/types";
import { useTranslation } from "next-i18next";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "./Link";
import { addPathPrefix } from "@site/utils/utils";
import { docs } from "@site/docs.config";

const DocsSidebar: React.FC<{
  sidebarItems: SidebarItem[];
  mobile?: boolean;
  locale?: string;
}> = (props) => {
  const { sidebarItems, mobile, locale } = props;
  const pathname = usePathname();
  const { t } = useTranslation();
  const renderPage = (page: SidebarItem, isChild: boolean = true) => {
    if (!isChild && !page.href) {
      return null;
    }
    const isActive =
      pathname ===
      addPathPrefix(
        page.href || "",
        locale !== docs.i18n.defaultLocale ? locale : "",
      );
    const isPublished = true;
    if (!isChild) {
      return (
        <li key={page.title} className="mt-4">
          <Link
            href={page.href || ""}
            className={clsx("-ml-px block", {
              "text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300":
                !isActive && isPublished,
              "text-slate-400": !isActive && !isPublished,
            })}
          >
            <h5
              className={clsx("mb-2 font-semibold lg:mb-3", {
                " text-slate-900 dark:text-slate-200 dark:hover:text-slate-50 hover:text-slate-700":
                  !isActive,
                "text-sky-500 dark:text-sky-400": isActive || mobile,
              })}
            >
              {page.title}
            </h5>
          </Link>
        </li>
      );
    }
    return (
      <li
        key={page.title || ""}
        className={clsx({
          "space-y-2 border-l border-slate-100 lg:space-y-2 dark:border-slate-800":
            !isChild,
        })}
      >
        <Link
          href={page.href || ""}
          className={clsx("-ml-px block border-l pl-4", {
            "text-sky-500 border-current font-semibold dark:text-sky-400":
              isActive || mobile,
            "border-transparent hover:border-slate-400 dark:hover:border-slate-500":
              !isActive,
            "text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300":
              !isActive && isPublished,
            "text-slate-400": !isActive && !isPublished,
          })}
        >
          {t(page.title)}
        </Link>
      </li>
    );
  };

  const render = (page: SidebarItem) => {
    if (page.children && page.children.length > 0) {
      return (
        <li key={page.title} className="mt-4">
          <h5 className="mb-2 font-semibold text-slate-900 lg:mb-3 dark:text-slate-200">
            {t(page.title)}
          </h5>
          <ul
            className={clsx(
              "space-y-2 border-l border-slate-100 lg:space-y-2",
              mobile ? "dark:border-slate-700" : "dark:border-slate-800",
            )}
          >
            {(page.children || []).map((item: SidebarItem) => renderPage(item))}
          </ul>
        </li>
      );
    }
    return renderPage(page, false);
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
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-[3.3rem] z-40 flex items-center border-b border-slate-900/10 bg-white p-4 leading-6 lg:hidden lg:bg-white/75 lg:backdrop-blur-sm dark:border-slate-50/[0.06] dark:bg-slate-900 lg:dark:bg-transparent">
      <button
        type="button"
        className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Navigation</span>
        <Bars3Icon className="size-6" />
      </button>
      <Dialog as="div" open={open} onClose={() => setOpen(false)}>
        <div className="fixed inset-0 z-40 overflow-y-auto ring-0 lg:hidden">
          <div className="min-h-screen w-52">
            <DialogPanel className="max-w-md bg-white  text-sm backdrop-blur-2xl dark:bg-slate-800">
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="fixed left-40 top-4 z-10 flex size-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span className="sr-only">Close navigation</span>
                <XMarkIcon className="size-5" />
              </button>
              <Sidebar
                topSidebar={topSidebar}
                sidebarItems={sidebarItems}
                mobile={open}
                locale={locale}
              />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <ol className="ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6">
        {page.parent && (
          <li className="flex items-center">
            {page.parent}
            <ChevronRightIcon className="size-5" />
          </li>
        )}
        <li className="truncate font-semibold text-slate-900 dark:text-slate-200">
          {page.title}
        </li>
      </ol>
    </div>
  );
};

export const Sidebar: React.FC<{
  sidebarItems: SidebarItem[];
  topSidebar?: SidebarItem[];
  mobile?: boolean;
  locale?: string;
}> = (props) => {
  const { sidebarItems, topSidebar = [], locale, mobile = false } = props;
  const pathname = usePathname();
  return (
    <div>
      <div
        className={clsx(
          "z-20 w-52 overflow-y-auto pb-10 lg:block xl:w-[19rem]",
          {
            hidden: !mobile,
            "pl-8 fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem]":
              !mobile,
            "pl-4": mobile,
          },
        )}
      >
        <nav className="relative pt-5 lg:text-sm lg:leading-6">
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
                    className={clsx(
                      "group mb-4 flex items-center font-semibold lg:text-sm lg:leading-6",
                      {
                        "text-sky-500 font-semibold dark:text-sky-400": active,
                        "text-slate-900 dark:text-slate-200 hover:text-slate-900  dark:hover:text-slate-300":
                          !active,
                      },
                    )}
                  >
                    <div className="mr-4 rounded-md p-1 shadow-sm ring-1 ring-slate-900/5 group-hover:shadow group-hover:shadow-violet-200 group-hover:ring-slate-900/10 dark:bg-slate-800 dark:shadow-none dark:ring-0 dark:group-hover:shadow-slate-400">
                      {item.icon}
                    </div>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <DocsSidebar sidebarItems={sidebarItems} locale={locale} />
          </ul>
        </nav>
      </div>
    </div>
  );
};
