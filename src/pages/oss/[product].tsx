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
import { DocLink } from "@site/components";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import type { GetStaticPaths } from "next";
import { useTranslation } from "next-i18next";
import { docs } from "@site/docs.config";
import { getI18nProps } from "@site/utils/i18n";
import {
  EasyIcon,
  EfficientIcon,
  IDCIcon,
  RocketIcon,
  RollupIcon,
  ScaleIcon,
} from "@site/icons";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { title } from "process";

const product = {
  name: "LinDB",
  title: "What's LinDB?",
  subTitle:
    "An open-source, cloud native, horizontally scalable, distributed time-series database.",
  github: "https://github.com/lindb/lindb",
  resources: [
    {
      title: "Get started",
      items: [
        {
          name: "Deployment",
          href: "/docs/lindb/getting-started/package",
        },
        {
          name: "Insert data",
          href: "/docs/lindb/developer-guide/insert-data",
        },
        {
          name: "Query data",
          href: "/docs/lindb/developer-guide/query-data",
        },
      ],
    },
    {
      title: "Get help",
      items: [
        {
          name: "Feature request",
          href: "https://github.com/lindb/lindb/issues/new?assignees=&labels=feature&projects=&template=feature-request.md&title=%5Bfeature%5D%3A",
        },
        {
          name: "Bug report",
          href: "https://github.com/lindb/lindb/issues/new?assignees=&labels=bug&projects=&template=bug-report.md&title=%5Bbug%5D%3A",
        },
        {
          name: "Ask a Question",
          href: "https://github.com/lindb/lindb/issues/new?assignees=&labels=question&projects=&template=ask-a-question.md&title=%5Bquestion%5D%3A",
        },
      ],
    },
    {
      title: "Learn more",
      items: [
        {
          name: "Developer Guide",
          href: "/docs/lindb/developer-guide/connect",
        },
        {
          name: "Admin Console",
          href: "/docs/lindb/admin-console/index",
        },
        {
          name: "LinQL",
          href: "/docs/lindb/lin-ql/sql",
        },
      ],
    },
  ],
  features: [
    {
      icon: (
        <RocketIcon className="size-12 stroke-indigo-500 dark:stroke-indigo-400" />
      ),
      title: "High performance",
      items: [
        "A single server could easily support more than one million write TPS.",
        "With fundamental techniques like efficient compression storage and parallel computing, LinDB delivers highly optimized query performance.",
      ],
    },
    {
      icon: (
        <EfficientIcon className="size-12 stroke-indigo-500 dark:stroke-indigo-400" />
      ),
      title: "High availability",
      items: [
        "The multi-channel replication protocol supports any amount of nodes, ensures the system availability.",
      ],
    },
    {
      icon: (
        <EasyIcon className="size-12 stroke-indigo-500 dark:stroke-indigo-400" />
      ),
      title: "Easy to use",
      items: [
        "Schema-free multi-dimensional data model with Metric, Tags, and Fields.",
        "The LinQL is flexible yet handy for real-time data analytics.",
      ],
    },
    {
      icon: (
        <ScaleIcon className="size-12 stroke-indigo-500 dark:stroke-indigo-400" />
      ),
      title: "Horizontal scalability",
      items: [
        "Horizontal scalable is made simple by adding more new broker and storage nodes without too much thinking and manual operations Schema-free multi-dimensional data model with Metric, Tags, and Fields.",
        "Tags-based sharding strategy resolves the hotspot problem",
      ],
    },
    {
      icon: (
        <IDCIcon className="size-12 fill-indigo-500  dark:fill-indigo-400 " />
      ),
      title: "Cross Multiple IDCs",
      items: [
        "LinDB is designed to work under a Multi-Active IDCs cloud architecture. The compute layer of LinDB, called brokers, supports efficient Multi-IDCs aggregation query.",
      ],
    },
    {
      icon: (
        <RollupIcon className="size-12 fill-indigo-500 dark:fill-indigo-400" />
      ),
      title: "Auto Rollup",
      items: [
        "LinDB supports rollup in specific intervals(minute, hour and day) automatically after creating the database(unlike the Continuous-Query of InfluxDB).",
      ],
    },
  ],
};

const Carousel = (props: { items: { img: string; title: string }[] }) => {
  const { items } = props;
  const [item, setItem] = useState(items[0]);
  const { t } = useTranslation();

  useEffect(() => {
    let c = 0;
    const interval = setInterval(() => {
      setItem(items[c % items.length]);
      c++;
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="max-w-5xl  py-16">
      <div className="pb-7 text-center text-4xl font-semibold text-indigo-500 dark:text-indigo-400">
        {t("Key Features")}
      </div>
      <div className="relative bg-gradient-to-b ring-1 ring-slate-900/5 sm:max-h-none sm:rounded-xl dark:bg-slate-700 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:backdrop-blur">
        <div className="relative flex flex-col shadow-xl">
          <div className="flex-none border-b border-slate-500/30">
            <div className="flex h-10 items-center space-x-1.5 px-3">
              <div className="size-2.5 rounded-full bg-[#EC6A5F]"></div>
              <div className="ml-1.5 size-2.5 rounded-full bg-[#F4BF50]"></div>
              <div className="ml-1.5 size-2.5 rounded-full bg-[#61C454]"></div>
              <div className="mx-auto flex w-full items-center justify-start rounded-md bg-slate-100 py-1 pl-3 text-xs font-medium leading-5 ring-1 ring-inset ring-slate-900/5 dark:bg-slate-800 dark:text-slate-500">
                <LockClosedIcon className="mr-2 size-3.5 text-slate-300 dark:text-slate-500" />
                {item.title}
              </div>
            </div>
          </div>
          <img src={item.img} />
        </div>
      </div>
    </div>
  );
};

export default function Products(props: { params: { product: string } }) {
  const features = product.features;
  return (
    <>
      <div className="flex flex-col items-center justify-between p-8">
        <div className="relative sm:pt-12 lg:pt-18">
          <p className="inline bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-400 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-3xl lg:text-5xl dark:from-indigo-200 dark:via-sky-400 dark:to-indigo-200">
            {product.title}
          </p>
          <p className="m-4 text-3xl italic tracking-tight text-slate-600 dark:text-slate-400">
            {product.subTitle}
          </p>
          <div className="mt-16 flex justify-center gap-4 font-semibold">
            <Link
              className="w-36 rounded-lg bg-blue-600 p-3 text-center  text-white hover:bg-blue-700"
              href={product.github}
            >
              Get started
            </Link>
            <Link
              className="w-36 rounded-lg bg-neutral-800 p-3 text-center text-white hover:bg-neutral-900"
              href={product.github}
              target="_blank"
            >
              View on GitHub
            </Link>
          </div>
        </div>
        <Carousel
          items={[
            {
              img: "/img/lindb/guide/admin_ui/overview.png",
              title: "cluster overview",
            },
            {
              img: "/img/lindb/guide/admin_ui/data_search.png",
              title: "data search",
            },
            {
              img: "/img/lindb/guide/admin_ui/data_search_explain.png",
              title: "search explain",
            },
            {
              img: "/img/lindb/guide/admin_ui/data_explore.png",
              title: "data explore",
            },
            {
              img: "/img/lindb/guide/admin_ui/dashboard.png",
              title: "dashboard",
            },
            {
              img: "/img/lindb/guide/admin_ui/replication_families.png",
              title: "replication",
            },
            {
              img: "/img/lindb/guide/admin_ui/replication_shards.png",
              title: "replication",
            },
            {
              img: "/img/lindb/guide/admin_ui/metadata_explore_compare.png",
              title: "metadata compare",
            },
          ]}
        />
        <div className="relative pb-20">
          <div className="py-12 text-center">
            <span className="bg-gradient-to-tl from-blue-600 to-purple-400 bg-clip-text text-4xl font-semibold text-transparent">
              Why {product.name}?
            </span>
          </div>
          <div className="mx-auto grid max-w-[85rem] gap-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:gap-8 ">
            {features.map((feature, index) => (
              <div className="relative flex sm:pe-6" key={index}>
                <div className="sm:ms-6 lg:ms-8">
                  <h1 className="mb-3 flex flex-col items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-white">
                    {feature.icon}
                    {feature.title}
                  </h1>
                  <div className="text-slate-600 dark:text-slate-400 ">
                    <ul className="before:*:mr-2 before:*:text-indigo-500  before:*:content-['>'] dark:before:*:text-indigo-400">
                      {feature.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto w-full">
          <div className="grid gap-6 px-4 sm:grid-cols-2  sm:px-6 lg:grid-cols-3 lg:gap-8 lg:px-16">
            {product.resources.map((resource, index) => (
              <div
                className="relative flex flex-col items-center sm:pe-6"
                key={index}
              >
                <h1 className="mb-4 text-2xl text-indigo-600 dark:text-indigo-500">
                  {resource.title}
                </h1>
                <ul>
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="prose mb-2 dark:prose-invert">
                      <DocLink href={item.href} internal>
                        {item.name}
                      </DocLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async (context: {
  params: { product: string };
}) => {
  return {
    props: {
      product: context.params.product,
      ...(await getI18nProps(docs.i18n.defaultLocale)),
    },
  };
};

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          product: "lindb",
        },
      },
    ],
    fallback: false, // false or "blocking"
  };
}) satisfies GetStaticPaths;
