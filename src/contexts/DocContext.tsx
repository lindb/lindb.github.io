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
import initI18N from "@site/i18n/i18n";
import { docs } from "@site/docs.config";
import { useRouter } from "next/router";

export const DocContext = createContext({
  locale: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeLocale: (locale: string) => {},
});

export const DocContextProvider: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  const { children } = props;
  const router = useRouter();
  const i18n = initI18N(`${router.query?.locale || docs.i18n.defaultLocale}`);
  const [locale, setLocale] = useState(i18n.language);
  const paths = router.asPath.split("/").filter((item) => item.trim() !== "");

  const changeLocale = (locale: string) => {
    i18n.changeLanguage(locale);
    setLocale(locale);
  };

  useEffect(() => {
    console.log("paths.....", paths);
    if (paths.length <= 0) {
      router.replace("/en/products/lindb", undefined, { shallow: true });
    } else if (!docs.i18n.locales.includes(paths[0])) {
      router.replace("/" + [locale, ...paths].join("/"), undefined, {
        shallow: true,
      });
    } else if (locale !== paths[0]) {
      router.replace("/" + [locale, ...paths.slice(1)].join("/"), undefined, {
        shallow: true,
      });
    }
  }, [locale, paths]);

  return (
    <DocContext.Provider value={{ locale, changeLocale }}>
      {children}
    </DocContext.Provider>
  );
};
