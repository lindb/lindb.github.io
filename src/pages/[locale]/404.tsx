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

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { MetaTitle } from "@site/components";
import { docs } from "@site/docs.config";
import { initialI18NextConfig } from "@site/i18n/i18n";

const NotFoundPage = () => {
  const { t } = useTranslation();
  const msg = t("This page could not be found");
  return (
    <>
      <MetaTitle title={msg} />
      <div className="flex flex-auto flex-col items-center justify-center px-4 text-center leading-[24em] sm:flex-row">
        <h1 className="text-2xl font-extrabold tracking-tight text-base-content sm:mr-6 sm:border-r sm:border-base-content/10 sm:pr-6 sm:text-3xl">
          404
        </h1>
        <h2 className="mt-2 text-lg text-base-content/70 sm:mt-0">{msg}</h2>
      </div>
    </>
  );
};
//
export const getStaticProps = async (context: {
  params: { locale: string; product: string };
}) => {
  return {
    props: {
      ...(await serverSideTranslations(
        context.params.locale,
        ["translation"],
        initialI18NextConfig,
      )),
    },
  };
};

export const getStaticPaths = async () => {
  const paths = docs.i18n.locales.map((locale) => {
    return {
      params: {
        locale: locale,
      },
    };
  });
  return {
    paths,
    fallback: false, // false or "blocking"
  };
};

export default NotFoundPage;
