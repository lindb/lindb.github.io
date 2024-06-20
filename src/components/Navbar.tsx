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
import { Dialog, DialogPanel } from "@headlessui/react";
import { GithubIcon } from "@site/icons";
import { ThemeToggle } from "./ThemeToggle";
import { EllipsisVerticalIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { DocSearch } from "./DocSearch";
import Link from "./Link";
import { LocaleSelect } from "./LocaleSelect";
import { docs } from "@site/docs.config";
import { useTranslation } from "next-i18next";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const NavbarItems = () => {
  const { items } = docs.navbar;
  const { t } = useTranslation();
  const { products } = docs;
  return (
    <>
      <ul className="flex space-x-6">
        <Popover>
          <PopoverButton className="text-sm/6 font-semibold  focus:outline-none data-[active]:text-white data-[hover]:text-sky-500 dark:data-[hover]:text-sky-400">
            {t("Open source")}
          </PopoverButton>
          <PopoverPanel
            anchor="bottom"
            className="z-50 mt-6 divide-y divide-white/5 bg-white text-sm/6 ring-1 ring-slate-900/10 [--anchor-gap:var(--spacing-5)] dark:bg-slate-900 dark:ring-slate-500/20"
          >
            <div className="p-3">
              {products.map((product) => (
                <Link
                  key={product.name}
                  className="flex items-center gap-3 px-3 py-2 transition hover:bg-white/5"
                  href={product.href}
                >
                  <img src={product.logo} className="size-8" />
                  <span>
                    <p className="font-semibold text-white">{product.name}</p>
                    <p className="italic text-white/50">{t(product.desc)}</p>
                  </span>
                </Link>
              ))}
            </div>
          </PopoverPanel>
        </Popover>
        {items.map((item) => (
          <li className="hover:cursor-pointer" key={item.href}>
            <Link
              href={item.href}
              className="hover:text-sky-500 dark:hover:text-sky-400"
            >
              {t(item.label)}
            </Link>
          </li>
        ))}
      </ul>
    </>
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

export const Navbar = () => {
  const { logo } = docs.navbar;
  return (
    <header className="sticky top-0 z-40 w-full flex-none bg-white leading-8 backdrop-blur-sm supports-backdrop-blur:bg-white/75 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] dark:bg-slate-900 supports-backdrop-blur:dark:bg-transparent">
      <div className="mx-auto max-w-8xl">
        <div className="mx-4 border-b border-slate-900/10 py-3 lg:mx-0 lg:border-0 lg:px-8 lg:py-4 dark:border-slate-300/10">
          <div className="relative flex items-center">
            <div className="relative ml-auto flex flex-1 items-center">
              <nav className="flex flex-1 items-center text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                <Link href="/" internal>
                  <img src={logo.src} alt={logo.alt} className="size-7" />
                </Link>
                <div className="hidden lg:ml-16 lg:block">
                  <NavbarItems />
                </div>
              </nav>
              <div className="flex items-center gap-4">
                <LocaleSelect />
                <ThemeToggle />
                <Link
                  internal
                  href="https://github.com/lindb/lindb"
                  className="block text-slate-600 hover:text-slate-700 dark:text-gray-200 dark:hover:text-slate-300"
                >
                  <span className="sr-only">LinDB on GitHub</span>
                  <GithubIcon />
                </Link>
                <div className="w-36">
                  <DocSearch />
                </div>
                <NavPopover className="-my-1 lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
