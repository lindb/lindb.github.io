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
import Link from "next/link";
import React from "react";

export const Footer: React.FC<{ className?: string }> = (props) => {
  const { className } = props;
  return (
    <footer className={clsx("justify-self-end py-4 lg:pt-8", className)}>
      <div className="max-w-8xl px-4">
        <div className="grid gap-4 sm:gap-8 lg:grid-cols-8 lg:gap-12">
          <div className="col-span-4">
            <p className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
              An open-source, cloud native, observabilty platform
            </p>
            <p className="flex items-center gap-2 pt-2">
              <Link
                href="https://github.com/lindb/lindb"
                className="block text-slate-600 hover:text-slate-700 dark:text-gray-200 dark:hover:text-slate-300"
              >
                <span className="sr-only">LinDB on GitHub</span>
                <GithubIcon />
              </Link>
              <Link
                href="https://github.com/lindb/lindb"
                className="block text-slate-600 hover:text-slate-700 dark:text-gray-200 dark:hover:text-slate-300"
              >
                <span className="sr-only">LinDB on GitHub</span>
                <TwitterIcon className="size-5" />
              </Link>
            </p>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-gray-400 dark:text-white">
              Open Source
            </h3>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-gray-400 dark:text-white">
              Resources
            </h3>
            <ul>
              <li className="mb-2">
                <Link href={"/en/docs/lindb/introduction"}>Documentation</Link>
              </li>
              <li className="mb-2">
                <Link href={"/downloads"}>Downloads</Link>
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
