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
import { GithubIcon, TwitterIcon } from "@site/icons";
import Link from "./Link";
import React from "react";
import { useTranslation } from "next-i18next";
import { docs } from "@site/docs.config";

export const Footer: React.FC<{ className?: string }> = () => {
  const { t } = useTranslation();
  const { products } = docs;
  return (
    <>
      <footer className="mx-auto footer max-w-7xl px-4 py-10 text-xs md:footer-horizontal">
        <nav>
          <h6 className="footer-title">
            {t("An open-source, cloud native, observabilty platform")}
          </h6>
          <div className="flex gap-4">
            <Link href="https://github.com/lindb/lindb">
              <span className="sr-only">LinDB on GitHub</span>
              <GithubIcon />
            </Link>
            <Link internal href="https://x.com/lindb_io">
              <span className="sr-only">LinDB on Twitter</span>
              <TwitterIcon className="size-5" />
            </Link>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">{t("Open source")}</h6>
          {products.map((product) => (
            <Link key={product.name} href={product.href}>
              {product.name}
            </Link>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">{t("Resources")}</h6>
          <Link href={"/docs/lindb/introduction"}>{t("Documentation")}</Link>
          <Link href={"/downloads/lindb"}>{t("Downloads")}</Link>
        </nav>
      </footer>
      <footer className="footer-center footer footer-horizontal p-5">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} Lin Labs Inc. All Rights
            Reserved.
          </p>
        </aside>
      </footer>
    </>
  );
};
