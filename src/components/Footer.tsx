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
import { GithubIcon, TwitterIcon } from "@site/icons";
import clsx from "clsx";
import Link from "./Link";
import React from "react";
import { useTranslation } from "next-i18next";
import { docs } from "@site/docs.config";

export const Footer: React.FC<{ className?: string }> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { products } = docs;
  return (
    <footer className={clsx("justify-self-end py-4 lg:pt-8", className)}>
      <div className="mx-auto max-w-8xl">
        <div className="mx-8 grid gap-4 sm:gap-8 lg:mx-0 lg:grid-cols-8 lg:gap-12 lg:px-8">
          <div className="col-span-4 mb-6 lg:mb-0">
            <p className="flex items-center gap-4 font-semibold italic text-slate-900 dark:text-slate-100">
              {t("An open-source, cloud native, observabilty platform")}
            </p>
            <p className="flex items-center gap-2 pt-3 lg:gap-5 lg:pt-6">
              <Link
                href="https://github.com/lindb/lindb"
                className="block text-slate-600 hover:text-slate-700 dark:text-gray-200 dark:hover:text-slate-300"
              >
                <span className="sr-only">LinDB on GitHub</span>
                <GithubIcon />
              </Link>
              <Link
                internal
                href="https://x.com/lindb_io"
                className="block text-slate-600 hover:text-slate-700 dark:text-gray-200 dark:hover:text-slate-300"
              >
                <span className="sr-only">LinDB on Twitter</span>
                <TwitterIcon className="size-5" />
              </Link>
            </p>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {t("Open source")}
            </h3>
            <ul>
              {products.map((product) => (
                <li className="mb-2" key={product.name}>
                  <Link
                    href={product.href}
                    className="hover:text-stone-900 dark:hover:text-slate-300"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {t("Resources")}
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  href={"/docs/lindb/introduction"}
                  className="hover:text-stone-900 dark:hover:text-slate-300"
                >
                  {t("Documentation")}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href={"/downloads/lindb"}
                  className="hover:text-stone-900 dark:hover:text-slate-300"
                >
                  {t("Downloads")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 border-gray-200 dark:border-gray-700" />
        <span className="block text-center text-sm font-normal text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()} Lin Labs Inc. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};
