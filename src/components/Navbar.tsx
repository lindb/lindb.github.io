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
import clsx from "clsx";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { GithubIcon } from "@site/icons";
import { ThemeToggle } from "./ThemeToggle";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const NavPopover: React.FC<{ className: string }> = (props) => {
  const { className } = props;
  return (
    <div className={clsx(className)}>
      <div>
        <Popover className="group">
          <PopoverButton className="flex size-8 items-center justify-center gap-2 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
            <EllipsisVerticalIcon className="ml-2 size-6 stroke-2" />
          </PopoverButton>
          <PopoverPanel
            anchor="bottom"
            className="fixed top-12 z-20 w-full rounded-b-lg bg-white p-4 text-base font-semibold text-slate-900 shadow-lg dark:bg-slate-800 dark:text-slate-400"
          >
            flsdjflksdjflsdjfl
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
};

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 w-full flex-none bg-white/95 backdrop-blur supports-backdrop-blur:bg-white/60 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] dark:bg-transparent">
      <div className="mx-auto max-w-8xl">
        <div className="mx-4 border-b border-slate-900/10 py-3 lg:mx-0 lg:border-0 lg:px-8 lg:py-4 dark:border-slate-300/10">
          <div className="relative flex items-center">
            <div className="relative ml-auto flex items-center">
              <nav className="hidden text-sm font-semibold leading-6 text-slate-700 lg:block dark:text-slate-200">
                <ul className="flex space-x-8">
                  <li className="hover:cursor-pointer">
                    <a className="hover:text-sky-500 dark:hover:text-sky-400">
                      Docs
                    </a>
                  </li>
                </ul>
              </nav>
              <ThemeToggle />
              <a
                href="https://github.com/lindb/lindb"
                className="ml-6 block text-slate-600 hover:text-slate-700 dark:text-gray-200 dark:hover:text-slate-300"
              >
                <span className="sr-only">LinDB on GitHub</span>
                <GithubIcon />
              </a>
              <NavPopover className="-my-1 lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
