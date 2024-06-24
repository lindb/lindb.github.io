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
import { ReleaseInfo } from "@site/types";
import React from "react";
import { MDXRemote } from "next-mdx-remote";
import Link from "./Link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { H } from "./Heading";

export const ReleaseNotes = (props: { releases?: ReleaseInfo[] }) => {
  const { releases = [] } = props;
  const os = (name: string) => {
    if (name.includes("darwin")) {
      return "MacOS";
    } else if (name.includes("windows")) {
      return "Windows";
    }
    return "Linux";
  };

  const arch = (name: string) => {
    const match = name.match(/(amd64|arm64)/);
    if (!match) {
      throw new Error("Invalid arch format");
    }
    const architecture = match[1];
    return architecture.toUpperCase();
  };

  const formatBytes = (bytes: number) => {
    const units = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Byte";
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toFixed(2) + " " + units[i];
  };
  return (
    <div>
      {releases.map((release: ReleaseInfo) => {
        return (
          <div
            key={release.name}
            className="border-b pb-6 dark:border-gray-800"
          >
            <H
              id={release.name}
              heading={2}
              href={"#" + release.name}
              className="italic"
            >
              🎉 {release.name}
              <span className="ml-2 bg-green-500 p-1 text-sm dark:bg-green-900">
                {release.published_at}
              </span>
            </H>
            <div key={release.name} className="italic">
              <MDXRemote {...release.mdxBody} />
            </div>

            <div>
              <h3 className="italic">📦 Packages downloads</h3>
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                {release.assets.map((asset) => {
                  return (
                    <div
                      key={asset.name}
                      className="border border-slate-300 p-2 dark:border-white/20 dark:bg-slate-800"
                    >
                      <div className="italic">
                        {os(asset.name)}
                        <span className="pl-1 text-sm">
                          ({arch(asset.name)})
                        </span>
                      </div>
                      <Link
                        href={asset.browser_download_url}
                        className="flex gap-1 text-sm"
                      >
                        <ArrowDownTrayIcon className="size-4" />
                        {asset.name}
                        <span>({formatBytes(asset.size)})</span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
