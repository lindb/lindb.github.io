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
import i18n from "@site/i18n/i18n";
import { docs } from "@site/docs.config";
import { useRouter } from "next/router";

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
  i18n.changeLanguage(`${router.query?.locale || docs.i18n.defaultLocale}`);
  const [locale, setLocale] = useState(i18n.language);
  const paths = router.asPath.split("/").filter((item) => item.trim() !== "");

  const changeLocale = (locale: string) => {
    i18n.changeLanguage(locale);
    setLocale(locale);
  };

  useEffect(() => {
    if (paths.length <= 0) {
      router.push("/en/products/lindb");
    } else if (paths.length == 1 && docs.i18n.locales.includes(paths[0])) {
      router.push("/" + paths[0] + "/products/lindb");
    } else if (!docs.i18n.locales.includes(paths[0])) {
      router.push("/" + [locale, ...paths].join("/"));
    } else if (locale !== paths[0]) {
      router.push("/" + [locale, ...paths.slice(1)].join("/"));
    }
  }, [locale, paths]);

  return (
    <DocContext.Provider value={{ locale, changeLocale }}>
      {children}
    </DocContext.Provider>
  );
};
