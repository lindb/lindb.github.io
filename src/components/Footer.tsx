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
import React from "react";

import Image from "next/image";
import { useTranslation } from "next-i18next";

import { docs } from "@site/docs.config";
import { GithubIcon, TwitterIcon } from "@site/icons";

import Link from "./Link";

export const Footer: React.FC<{ className?: string }> = () => {
  const { t } = useTranslation();
  const { products } = docs;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-base-content/10 bg-base-200/40">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-8 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={docs.navbar.logo.src}
                alt={docs.navbar.logo.alt}
                width={28}
                height={28}
              />
              <span className="text-base font-semibold text-base-content">
                Lin Labs
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-base-content/60">
              {t(
                "Open-source observability platform for metrics, traces, and logs.",
              )}
            </p>
            <div className="mt-4 flex gap-4">
              <Link
                href="https://github.com/lindb/lindb"
                className="text-base-content/50 transition-colors hover:text-base-content"
              >
                <span className="sr-only">LinDB on GitHub</span>
                <GithubIcon className="size-5" />
              </Link>
              <Link
                internal
                href="https://x.com/lindb_io"
                className="text-base-content/50 transition-colors hover:text-base-content"
              >
                <span className="sr-only">LinDB on Twitter</span>
                <TwitterIcon className="size-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h6 className="text-xs font-semibold tracking-widest text-base-content/40 uppercase">
              {t("Products")}
            </h6>
            <ul className="mt-4 space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-sm text-base-content/70 transition-colors hover:text-base-content"
                  >
                    {product.name}
                  </Link>
                  <p className="text-xs text-base-content/50">{product.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h6 className="text-xs font-semibold tracking-widest text-base-content/40 uppercase">
              {t("Resources")}
            </h6>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/docs/lindb/introduction"
                  className="text-sm text-base-content/70 transition-colors hover:text-base-content"
                >
                  {t("Documentation")}
                </Link>
              </li>
              <li>
                <Link
                  href="/downloads/lindb"
                  className="text-sm text-base-content/70 transition-colors hover:text-base-content"
                >
                  {t("Downloads")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/lindb/lindb"
                  className="text-sm text-base-content/70 transition-colors hover:text-base-content"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-base-content/10 pt-4 sm:flex-row">
          <p className="text-xs text-base-content/50">
            © {year} Lin Labs Inc. All rights reserved.
          </p>
          <p className="text-xs text-base-content/40">
            Licensed under Apache 2.0
          </p>
        </div>
      </div>
    </footer>
  );
};
