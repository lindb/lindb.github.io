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
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { docs } from "@site/docs.config";

const initI18N = (locale: string) => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    // .use(LanguageDetector)
    .init({
      // detection: {
      //   order: ["path", "querystring", "htmlTag"],
      //   lookupFromPathIndex: 0,
      // },
      // debug: true,
      lng: locale,
      supportedLngs: docs.i18n.locales,
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources: {
        zh: {
          translation: {
            docs: "zh Welcome to React and react-i18next",
          },
        },
        en: {
          translation: {
            docs: "en Welcome to React and react-i18next",
            product: "hahaha",
          },
        },
      },

      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });
  return i18n;
};

export default initI18N;
