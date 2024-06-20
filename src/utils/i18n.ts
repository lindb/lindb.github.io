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
import { initialI18NextConfig } from "@site/i18n/i18n";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getI18nProps = async (locale: string, ns = ["translation"]) => {
  return {
    ...(await serverSideTranslations(
      locale || docs.i18n.defaultLocale,
      ns,
      initialI18NextConfig,
    )),
  };
};
