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
import { getI18nProps } from "@site/utils/i18n";
import { GetStaticPaths } from "next";
import React from "react";

const Downloads = () => {
  return <div className="flex-auto">downloads</div>;
};

export const getStaticProps = async (context: {
  params: { locale: string; product: string };
}) => {
  return {
    props: {
      ...context.params,
      ...(await getI18nProps(context.params.locale)),
    },
  };
};

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          product: "lindb",
          locale: "zh",
        },
      },
    ],
    fallback: false, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export default Downloads;
