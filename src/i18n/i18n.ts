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
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import { docs } from "@site/docs.config";
import resourcesToBackend from "i18next-resources-to-backend";
//
// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(
//     resourcesToBackend((language: string, namespace: string) => {
//       return import(`@/i18n/${language}/${namespace}.json`);
//     }),
//   )
//   .init({
//     supportedLngs: docs.i18n.locales,
//   });
//

import { docs } from "@site/docs.config";
import { UserConfig } from "next-i18next";

// export default i18n;
export const initialI18NextConfig: UserConfig = {
  // debug: true,
  i18n: docs.i18n,
  // localePath: "i18n",
  fallbackLng: docs.i18n.defaultLocale,
  use: [
    resourcesToBackend((language: string, namespace: string) => {
      console.log("hahahaha", language, namespace);
      return import(`@/i18n/${language}/${namespace}.json`);
    }),
  ],
  defaultNS: "translation",
  serializeConfig: false,
};
