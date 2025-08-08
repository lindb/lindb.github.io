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

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";

import { DocContext } from "@site/contexts";
import { docs } from "@site/docs.config";
import { GithubIcon } from "@site/icons";

import { DocSearch } from "./DocSearch";
import Link from "./Link";
import { LocaleSelect } from "./LocaleSelect";
import { ThemeToggle } from "./ThemeToggle";

const NavbarItems = () => {
  const { items } = docs.navbar;
  const { t } = useTranslation();
  const { products } = docs;
  return (
    <>
      <div className="mx-2 flex flex-1 items-center gap-2 text-sm font-semibold lg:mx-10 lg:gap-8">
        <div className="cursor-pointer p-2 hover:bg-base-content/10">
          <div className="dropdown dropdown-start">
            <div tabIndex={0} className="flex items-center">
              <a>{t("Open source")}</a>
            </div>
            <ul
              tabIndex={1}
              className="dropdown-content z-99 mt-2 flex w-96 flex-col gap-1 border border-base-content/10 bg-base-100 p-2"
            >
              {products.map((product) => (
                <li
                  key={product.name}
                  className="cursor-pointer hover:bg-base-content/10"
                >
                  <Link
                    className="flex items-center gap-3 px-3 py-2"
                    href={product.href}
                  >
                    <img src={product.logo} className="size-8" />
                    <span>
                      <p className="content-start font-semibold">
                        {product.name}
                      </p>
                      <p className="text-base-content/70 italic">
                        {t(product.desc)}
                      </p>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {items.map((item) => (
          <div
            key={item.href}
            className="cursor-pointer p-2 hover:bg-base-content/10"
          >
            <Link href={item.href}>{t(item.label)}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

const NavPopover: React.FC<{ className: string }> = (props) => {
  const { className } = props;
  const { setSidebarOpen } = useContext(DocContext);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className={classNames(className)}>
      <button
        type="button"
        className="flex items-center justify-center"
        onClick={() => {
          setSidebarOpen(false);
          setOpen(true);
        }}
      >
        <span className="sr-only">Navigation</span>
        <div className="bg-base-content/10">
          <Bars3Icon className="size-6" />
        </div>
      </button>
      <div
        className={classNames({
          hidden: !open,
          "fixed left-0 top-[64px] p-2 w-full z-50 bg-base-100 h-12 border-b border-base-content/10":
            open,
        })}
      >
        <div className="flex items-center">
          <NavbarItems />
          <button
            onClick={() => setOpen(false)}
            type="button"
            className="flex items-center justify-center"
          >
            <span className="sr-only">Close navigation</span>
            <XMarkIcon className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const { logo } = docs.navbar;
  return (
    <div
      className={classNames(
        "sticky top-0 navbar z-50 border-b border-base-content/8 bg-base-100 px-2 lg:px-8",
      )}
    >
      <div className="navbar-start">
        <Link href="/" internal>
          <img src={logo.src} alt={logo.alt} className="size-7" />
        </Link>
        <div className="hidden lg:block">
          <NavbarItems />
        </div>
        <div className="ml-4 w-32 lg:w-72">
          <DocSearch />
        </div>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end">
        <div className="flex:gap-3 flex items-center gap-2">
          <LocaleSelect />
          <ThemeToggle />
          <Link internal href="https://github.com/lindb/lindb">
            <span className="sr-only">LinDB on GitHub</span>
            <GithubIcon />
          </Link>
          <NavPopover className="lg:hidden" />
        </div>
      </div>
    </div>
  );
};
