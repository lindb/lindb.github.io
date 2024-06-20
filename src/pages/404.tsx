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
import React from "react";
import { MetaTitle } from "@site/components";
import { useTranslation } from "next-i18next";
import { initialI18NextConfig } from "@site/i18n/i18n";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { docs } from "@site/docs.config";

const NotFoundPage = () => {
  const { t, i18n } = useTranslation();
  console.log("4040-...", i18n.language);
  const msg = t("This page could not be found");
  return (
    <>
      <MetaTitle title={msg} />
      <div className="flex flex-auto flex-col items-center justify-center px-4 text-center leading-[24em] sm:flex-row">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:mr-6 sm:border-r sm:border-slate-900/10 sm:pr-6 sm:text-3xl dark:text-slate-200 sm:dark:border-slate-300/10">
          404
        </h1>
        <h2 className="mt-2 text-lg text-slate-700 sm:mt-0 dark:text-slate-400">
          {msg}
        </h2>
      </div>
    </>
  );
};
//
// export const getStaticProps = async (context: {
//   params: { locale: string; product: string };
// }) => {
//   console.log(context, "kkkkkk");
//   return {
//     props: {
//       ...(await serverSideTranslations(
//         docs.i18n.defaultLocale,
//         ["translation"],
//         initialI18NextConfig,
//       )),
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const paths = docs.i18n.locales.map((locale) => {
//     return {
//       params: {
//         locale: locale,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false, // false or "blocking"
//   };
// };

export default NotFoundPage;
