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
export const docs = {
  products: [
    {
      name: "LinDB",
      sidebar: [
        "introduction",
        {
          title: "Getting Started",
          children: ["getting-started/docker", "getting-started/binaries"],
        },
        {
          title: "Develop",
          children: [
            "develop/connect",
            "develop/create-database",
            "develop/write-data",
            "develop/read-data",
          ],
        },
        {
          title: "Deployment",
          children: ["deployment/kubernetes", "deployment/manual"],
        },
        {
          title: "Client",
          children: ["client/cli", "client/index", "client/go", "client/java"],
        },
        {
          title: "Lin QL",
          children: ["lin-ql/sql"],
        },
        {
          title: "Admin UI",
          children: [
            "admin-ui/index",
            "admin-ui/overview",
            "admin-ui/search",
            "admin-ui/explore",
            "admin-ui/monitoring",
            "admin-ui/metadata",
          ],
        },
        {
          title: "API",
          children: ["api/index", "api/write", "api/query", "api/state"],
        },
        {
          title: "Reference",
          children: [
            "reference/data-model",
            "reference/metric",
            "reference/configuration",
          ],
        },
        {
          title: "Design",
          children: [
            "design/architecture",
            "design/coordinator",
            "design/replication",
            "design/query",
            "design/storage",
            "design/memory-database",
            "design/inverted-index",
          ],
        },
      ],
    },
  ],
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
  },
};
