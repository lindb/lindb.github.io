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
import { docs } from "@site/docs.config";
import { SidebarItem } from "@site/types";

export const languagePrefix = "language-";

export const getHeadingId = (heading: string) => {
  return heading.replace(/ /g, "_").toLowerCase();
};

export const getDocPages = (sidebarItems: SidebarItem[]) => {
  const result: SidebarItem[] = [];
  sidebarItems.forEach((page) => {
    if (page.children && page.children.length > 0) {
      page.children.forEach((child) => {
        result.push(child);
      });
    } else {
      result.push(page);
    }
  });
  return result;
};

export const getLocale = (
  url: string,
): { locale: string; include: boolean } => {
  const paths = url.split("/").filter((item) => item.trim() !== "");
  const locale = paths.length > 0 ? paths[0] : "";
  if (docs.i18n.locales.includes(locale)) {
    return { locale, include: true };
  }
  return { locale: docs.i18n.defaultLocale, include: false };
};

// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
export const isAbsoluteUrl = (url: string) => ABSOLUTE_URL_REGEX.test(url);

/**
 * Adds the provided prefix to the given path. It first ensures that the path
 * is indeed starting with a slash.
 */
export function addPathPrefix(path: string, prefix?: string) {
  return `/${prefix}${path}`;
}
