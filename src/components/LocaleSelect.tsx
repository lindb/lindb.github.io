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

import Link from "next/link";
import { useRouter } from "next/router";

import { LanguageIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";

import { docs } from "@site/docs.config";
import languageDetector from "@site/i18n/language-detector";
import { getLocale } from "@site/utils/utils";

const mapping = {
  en: "English",
  zh: "简体中文",
};

export const LocaleSelect: React.FC = () => {
  const router = useRouter();
  const paths = router.asPath.split("/").filter((item) => item.trim() !== "");

  const getHref = (locale: string) => {
    let href = router.asPath;
    const { include } = getLocale(router.asPath);
    if (locale !== docs.i18n.defaultLocale) {
      if (include) {
        href = "/" + [locale, ...paths.slice(1)].join("/");
      } else {
        href = "/" + [locale, ...paths].join("/");
      }
    } else {
      if (include) {
        href = "/" + [...paths.slice(1)].join("/");
      }
    }
    return href;
  };

  const languageBtnCls = (l: string) => {
    const locale = languageDetector.detect();
    return classNames(
      "group flex w-full items-center gap-2 px-3 py-1.5 hover:bg-base-content/10",
      {
        "text-primary bg-base-content/10":
          locale === l || (l === docs.i18n.defaultLocale && !locale),
      },
    );
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0}>
        <LanguageIcon className="size-5" />
      </div>
      <ul
        tabIndex={1}
        className="dropdown-content z-30 mt-2 flex w-36 flex-col gap-1 border border-base-content/10 bg-base-100 p-2"
      >
        {docs.i18n.locales.map((localeItem) => (
          <li key={localeItem}>
            <Link
              href={getHref(localeItem)}
              className={languageBtnCls(localeItem)}
              onClick={() => {
                const el = document.activeElement as HTMLElement;
                if (el && el.blur) {
                  el.blur();
                }
              }}
            >
              {mapping[localeItem]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
