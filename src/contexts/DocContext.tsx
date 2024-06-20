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
import React, { createContext, useEffect, useState } from "react";
// import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { docs } from "@site/docs.config";
import { useRouter } from "next/router";
import { getLocale } from "@site/utils/utils";

export const DocContext = createContext({
  locale: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeLocale: (_locale: string) => {},
});

export const DocContextProvider: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  const { children } = props;
  const router = useRouter();
  const paths = router.asPath.split("/").filter((item) => item.trim() !== "");
  const [locale, setLocale] = useState(() => {
    const locale = getLocale(router.asPath).locale;
    return locale === docs.i18n.defaultLocale ? "" : locale;
  });
  console.log("ccccc.....", router);

  // useEffect(() => {
  //   i18n
  //     .use(initReactI18next) // passes i18n down to react-i18next
  //     .use(
  //       resourcesToBackend((language: string, namespace: string) => {
  //         return import(`@/i18n/${language}/${namespace}.json`);
  //       }),
  //     )
  //     .init({
  //       lng: getLocale(router.asPath).locale,
  //       supportedLngs: docs.i18n.locales,
  //     });
  // }, []);

  const changeLocale = (newLocale: string) => {
    if (newLocale === locale) {
      return;
    }
    // i18n.changeLanguage(newLocale, () => {
    setLocale(newLocale === docs.i18n.defaultLocale ? "" : newLocale);
    const { include } = getLocale(router.asPath);
    if (newLocale !== docs.i18n.defaultLocale) {
      if (include) {
        router.push("/" + [newLocale, ...paths.slice(1)].join("/"));
      } else {
        router.push("/" + [newLocale, ...paths].join("/"));
      }
    } else {
      if (include) {
        router.push("/" + [...paths.slice(1)].join("/"));
      }
    }
    // });
  };

  useEffect(() => {
    const { locale: newLocale } = getLocale(router.asPath);
    if (newLocale !== locale) {
      // i18n.changeLanguage(newLocale);
      setLocale(newLocale);
    }
  }, [router]);

  return (
    <DocContext.Provider value={{ locale, changeLocale }}>
      {children}
    </DocContext.Provider>
  );
};
