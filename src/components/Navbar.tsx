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
import React, { useState } from "react";
import clsx from "clsx";
import { Dialog, DialogPanel } from "@headlessui/react";
import { GithubIcon } from "@site/icons";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import {
  Bars3Icon,
  EllipsisVerticalIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { PageInfo } from "@site/navs/documentation";
import { getDocPages } from "@site/utils/utils";
import { Sidebar } from "./Sidebar";
import { DocSearch } from "./DocSearch";
import Link from "next/link";

const NavbarItems = () => {
  return (
    <ul>
      <li className="hover:cursor-pointer">
        <Link
          href="/en/docs/lindb/introduction"
          className="hover:text-sky-500 dark:hover:text-sky-400"
        >
          Docs
        </Link>
      </li>
    </ul>
  );
};

const NavPopover: React.FC<{ className: string }> = (props) => {
  const { className } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className={clsx(className)}>
      <button
        type="button"
        className="flex size-5 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Navigation</span>
        <EllipsisVerticalIcon className="size-5" />
      </button>
      <Dialog as="div" open={open} onClose={() => setOpen(false)}>
        <div className="fixed inset-0 top-12 z-20 w-screen overflow-y-auto ring-0 lg:hidden">
          <div className="flex h-10">
            <DialogPanel className="min-h-20 w-full bg-white p-6 text-base font-semibold  text-slate-900 backdrop-blur-2xl dark:bg-slate-800 dark:text-slate-400">
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="absolute right-5 top-5 z-10 flex size-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span className="sr-only">Close navigation</span>
                <XMarkIcon className="size-5" />
              </button>
              <NavbarItems />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
const NavSidebar: React.FC<{ sidebarItems: PageInfo[] }> = (props) => {
  const { sidebarItems } = props;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const pages = getDocPages(sidebarItems);
  const currentPage = pages[pages.findIndex((p) => p.href === pathname)];

  return (
    <div className="flex items-center border-b border-slate-900/10 p-4 lg:hidden dark:border-slate-50/[0.06]">
      <button
        type="button"
        className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Navigation</span>
        <Bars3Icon className="size-6" />
      </button>
      <Dialog as="div" open={open} onClose={() => setOpen(false)}>
        <div className="fixed inset-0 z-20 w-screen overflow-y-auto ring-0 lg:hidden">
          <div className="flex h-full">
            <DialogPanel className="h-screen max-w-md bg-white  text-sm backdrop-blur-2xl dark:bg-slate-800">
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="absolute right-5 top-5 z-10 flex size-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span className="sr-only">Close navigation</span>
                <XMarkIcon className="size-5" />
              </button>
              <Sidebar sidebarItems={sidebarItems} mobile={open} />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <ol className="ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6">
        {currentPage.parent && (
          <li className="flex items-center">
            {currentPage.parent.title}
            <ChevronRightIcon className="size-5" />
          </li>
        )}
        <li className="truncate font-semibold text-slate-900 dark:text-slate-200">
          {currentPage.title}
        </li>
      </ol>
    </div>
  );
};

export const Navbar: React.FC<{ sidebarItems?: PageInfo[] }> = (props) => {
  const { sidebarItems } = props;

  return (
    <header className="sticky top-0 z-10 w-full flex-none bg-white/95 backdrop-blur supports-backdrop-blur:bg-white/60 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] dark:bg-transparent">
      <div className="mx-auto max-w-8xl">
        <div className="mx-4 border-b border-slate-900/10 py-3 lg:mx-0 lg:border-0 lg:px-8 lg:py-4 dark:border-slate-300/10">
          <div className="relative flex items-center">
            <div className="relative ml-auto flex flex-1 items-center">
              <nav className="flex flex-1 items-center text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                <img src="/img/logo.png" className="size-7" />
                <div className="hidden space-x-8 lg:ml-8 lg:flex">
                  <NavbarItems />
                </div>
              </nav>
              <div className="flex items-center gap-4">
                <div className="w-36">
                  <DocSearch />
                </div>
                <ThemeToggle />
                <Link
                  href="https://github.com/lindb/lindb"
                  className="block text-slate-600 hover:text-slate-700 dark:text-gray-200 dark:hover:text-slate-300"
                >
                  <span className="sr-only">LinDB on GitHub</span>
                  <GithubIcon />
                </Link>
                <NavPopover className="-my-1 lg:hidden" />
              </div>
            </div>
          </div>
        </div>
        {sidebarItems && sidebarItems.length > 0 && (
          <NavSidebar sidebarItems={sidebarItems} />
        )}
      </div>
    </header>
  );
};
