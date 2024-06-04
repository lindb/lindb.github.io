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
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="justify-self-end py-4 lg:pt-8">
      <div className="mx-auto max-w-8xl px-4">
        <div className="grid gap-4 sm:gap-8 lg:grid-cols-8 lg:gap-12">
          <div className="col-span-4">
            <p className="text-gray-600 dark:text-gray-400">
              An open-source, cloud native, observabilty platform
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
                <Link href={"/docs/my-mdx-page"}>Documentation</Link>
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
