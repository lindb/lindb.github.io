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
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useTranslation } from "next-i18next";

import {
  ArrowRightIcon,
  ArrowUpTrayIcon,
  BookOpenIcon,
  ChevronDownIcon,
  CircleStackIcon,
  CpuChipIcon,
  LifebuoyIcon,
  SignalIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import { CodeBlock } from "@site/components/CodeBlock";
import { docs } from "@site/docs.config";
import {
  EasyIcon,
  EfficientIcon,
  IDCIcon,
  RocketIcon,
  RollupIcon,
  ScaleIcon,
} from "@site/icons";
import { getI18nProps } from "@site/utils/i18n";

const product = {
  name: "LinDB",
  github: "https://github.com/lindb/lindb",
  resources: [
    {
      title: "Getting Started",
      icon: RocketIcon,
      color: "indigo",
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
      title: "Get Help",
      icon: LifebuoyIcon,
      color: "sky",
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
      title: "Inside LinDB",
      icon: CpuChipIcon,
      color: "purple",
      items: [
        {
          name: "Architecture",
          href: "/docs/lindb/design/architecture",
        },
        {
          name: "Storage",
          href: "/docs/lindb/design/storage",
        },
        {
          name: "Inverted index",
          href: "/docs/lindb/design/inverted-index",
        },
      ],
    },
    {
      title: "Learn More",
      icon: BookOpenIcon,
      color: "emerald",
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
};

const keyFeatures = [
  {
    icon: RollupIcon,
    title: "Auto Rollup",
    desc: "Configure multi-tier rollup at database creation. LinDB automatically downsample data — no manual Continuous-Query maintenance required.",
    sql: `CREATE DATABASE observability
WITH (numOfShard: 4, replicaFactor: 2,
  behead: 1h, ahead: 2h)
ROLLUP (
  (interval: 10s, retention: 30d),
  (interval: 10m, retention: 180d));`,
  },
  {
    icon: EfficientIcon,
    title: "OpenTelemetry Native",
    desc: "First-class OTLP ingestion. Query spans and traces directly with LinQL — histogram, percentile, filter by service and status.",
    sql: `SELECT histogram(duration_ns)
FROM traces
WHERE time > now() - 1h
  AND service_name="checkout"
  AND status_code="ERROR"
GROUP BY span_name;`,
  },
  {
    icon: IDCIcon,
    title: "SQL-based CEP",
    desc: "Write Complex Event Processing rules in LinQL to derive RED metrics, exemplars, and alerts directly from raw trace or log streams.",
    sql: `CREATE METRIC RULE red_metrics
FROM traces
WHERE service_name IS NOT NULL
EMIT (
  rate(1m)       AS request_rate,
  error_rate     AS error_rate,
  p99(duration_ns) AS latency_p99
)
GROUP BY service_name, span_name;`,
  },
  {
    icon: RocketIcon,
    title: "Exemplar Correlation",
    desc: "Correlate metrics with trace exemplars in a single query. Jump from an anomalous metric directly to the culprit trace.",
    sql: `SELECT avg(cpu_usage), exemplar(trace_id)
FROM system_monitoring
WHERE time > now() - 1h
  AND host LIKE "us-east-*"
GROUP BY region
HAVING avg(cpu_usage) > 0.7;`,
  },
];

const features = [
  {
    icon: RocketIcon,
    title: "High Performance",
    desc: "1M+ write TPS on a single node with efficient compression storage and parallel computing for optimized query performance.",
  },
  {
    icon: ScaleIcon,
    title: "Horizontal Scalability",
    desc: "Broker/storage separation and tag-based sharding let you scale read and write independently without hotspots.",
  },
  {
    icon: RollupIcon,
    title: "Auto Rollup",
    desc: "Automatic minute/hour/day rollups configured at database creation — no manual Continuous-Query maintenance.",
  },
  {
    icon: EfficientIcon,
    title: "OpenTelemetry Native",
    desc: "First-class OTLP ingestion out of the box. Drop your OTel Collector output directly into LinDB without adapters.",
  },
  {
    icon: IDCIcon,
    title: "Unified Observability",
    desc: "Store Traces, Logs, and Metrics in one database — no more silos, no more glue code between separate systems.",
  },
  {
    icon: EasyIcon,
    title: "SQL-based CEP",
    desc: "Write Complex Event Processing rules in LinQL to generate derived metrics, exemplars, and alerts from raw trace/log data.",
  },
];

const CountUp = ({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 30);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [target]);
  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const Products = () => {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="flex flex-col items-center justify-between">
      {/* ── 1. Hero ── */}
      <section className="relative w-full overflow-hidden px-8 pt-24 pb-24 text-center sm:pt-32 lg:pt-40 lg:pb-32">
        {/* decorative radial glows — layered multi-color */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* center indigo */}
          <div className="absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-400/15" />
          {/* left sky accent */}
          <div className="absolute -left-20 top-10 h-[400px] w-[500px] rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/10" />
          {/* right purple accent */}
          <div className="absolute -right-20 bottom-0 h-[400px] w-[500px] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-400/10" />
          {/* bottom emerald glow */}
          <div className="absolute bottom-0 left-1/2 h-[200px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/8 blur-3xl dark:bg-emerald-400/8" />
        </div>
        {/* Live metrics stream SVG background */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.09] dark:opacity-[0.14]"
          preserveAspectRatio="none"
        >
          <polyline
            points="0,60 60,52 120,70 180,48 240,65 300,50 360,72 420,55 480,68 540,42 600,65 660,50 720,70 780,48 840,65 900,52 960,70"
            fill="none"
            stroke="#6366f1"
            strokeWidth="1.5"
            strokeDasharray="960"
            strokeDashoffset="0"
            style={{ animation: "stream-scroll 4s linear infinite" }}
          />
          <polyline
            points="0,120 60,115 120,128 180,108 240,122 300,108 360,126 420,114 480,123 540,105 600,125 660,112 720,128 780,106 840,122 900,110 960,126"
            fill="none"
            stroke="#6366f1"
            strokeWidth="1"
            strokeDasharray="960"
            strokeDashoffset="0"
            style={{ animation: "stream-scroll 5s linear infinite" }}
          />
          <polyline
            points="0,185 60,180 120,192 180,172 240,188 300,172 360,190 420,178 480,187 540,168 600,188 660,176 720,192 780,170 840,186 900,174 960,190"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeDasharray="960"
            strokeDashoffset="0"
            style={{ animation: "stream-scroll 6s linear infinite" }}
          />
          <polyline
            points="0,250 30,248 60,258 90,232 120,260 150,242 180,256 210,228 240,262 270,248 300,258 330,232 360,262 390,244 420,258 450,230 480,264 510,248 540,260 570,234 600,264 660,248 720,260 780,234 840,262 900,246 960,260"
            fill="none"
            stroke="#a855f7"
            strokeWidth="1.5"
            strokeDasharray="960"
            strokeDashoffset="0"
            style={{ animation: "stream-scroll 5s linear infinite" }}
          />
          <polyline
            points="0,320 80,318 120,282 160,318 240,320 280,286 320,320 400,318 440,278 480,320 560,318 600,282 660,318 720,320 800,284 840,320 920,316 960,282"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeDasharray="960"
            strokeDashoffset="0"
            style={{ animation: "stream-scroll 7s linear infinite" }}
          />
          <polyline
            points="0,390 60,386 120,398 180,374 240,392 300,376 360,394 420,382 480,396 540,370 600,392 660,378 720,396 780,372 840,390 900,376 960,394"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1"
            strokeDasharray="960"
            strokeDashoffset="0"
            style={{ animation: "stream-scroll 8s linear infinite" }}
          />
        </svg>
        {/* Floating signal orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[5%] top-[10%] h-48 w-48 rounded-full bg-indigo-400/15 blur-3xl [animation:float-y_6s_ease-in-out_infinite]" />
          <div className="absolute right-[6%] top-[8%] h-40 w-40 rounded-full bg-sky-400/15 blur-3xl [animation:float-y_8s_ease-in-out_1s_infinite]" />
          <div className="absolute left-[18%] bottom-[15%] h-32 w-32 rounded-full bg-purple-400/15 blur-3xl [animation:float-y_7s_ease-in-out_2s_infinite]" />
          <div className="absolute right-[18%] bottom-[12%] h-40 w-40 rounded-full bg-emerald-400/15 blur-3xl [animation:float-y_9s_ease-in-out_0.5s_infinite]" />
          <div className="absolute left-[40%] top-[5%] h-24 w-24 rounded-full bg-sky-300/10 blur-2xl [animation:float-y_5s_ease-in-out_1.5s_infinite]" />
          <div className="absolute right-[35%] bottom-[5%] h-20 w-20 rounded-full bg-indigo-300/10 blur-2xl [animation:float-y_6s_ease-in-out_3s_infinite]" />
        </div>
        {/* Pre-headline badge */}
        <div
          className="mb-6 flex justify-center [animation:fade-in-up_0.6s_ease_both]"
          style={{ animationDelay: "0s" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/40 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold tracking-widest text-indigo-600 uppercase backdrop-blur dark:border-indigo-500/30 dark:bg-indigo-950/50 dark:text-indigo-300">
            <span className="size-1.5 animate-pulse rounded-full bg-indigo-500" />
            {t("Open Source · OpenTelemetry Native · SQL-based CEP")}
          </span>
        </div>
        {/* Two-line headline */}
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl [animation:fade-in-up_0.6s_ease_both]"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="block bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent bg-[length:200%_auto] [animation:gradient-x_4s_ease_infinite] dark:from-indigo-200 dark:via-sky-400 dark:to-indigo-200">
            {t("Observe, Ingest, Analyze.")}
          </span>
          <span className="mt-1 block text-base-content">
            {t("All Signals. One Platform.")}
          </span>
        </h1>
        {/* Subtitle */}
        <p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed tracking-tight text-base-content/60 lg:text-xl [animation:fade-in-up_0.6s_ease_both]"
          style={{ animationDelay: "0.3s" }}
        >
          {t(
            "A native observability processing platform that stores and analyzes Metrics, Traces, Logs, and Exemplars in a single engine — powered by SQL-based CEP for real-time correlation, automated rollups, and derived insights.",
          )}
        </p>
        {/* Signal-type pill cluster */}
        <div
          className="mt-6 flex flex-wrap justify-center gap-2 [animation:fade-in-up_0.6s_ease_both]"
          style={{ animationDelay: "0.45s" }}
        >
          {[
            {
              label: "Metrics",
              color:
                "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300",
            },
            {
              label: "Traces",
              color:
                "bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300",
            },
            {
              label: "Logs",
              color:
                "bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300",
            },
            {
              label: "Exemplars",
              color:
                "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300",
            },
          ].map(({ label, color }) => (
            <span
              key={label}
              className={`${color} rounded-full px-3 py-1 text-xs font-semibold`}
            >
              {t(label)}
            </span>
          ))}
        </div>
        {/* CTA buttons */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-4 font-semibold [animation:fade-in-up_0.6s_ease_both]"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            className="rounded-lg bg-primary px-6 py-3 text-center text-primary-content shadow-sm transition-all hover:opacity-90 hover:shadow-md"
            href="/docs/lindb/getting-started/docker"
          >
            {t("Get Started")}
          </Link>
          <Link
            className="rounded-lg bg-base-200 px-6 py-3 text-center text-base-content ring-1 ring-base-content/15 transition-all hover:bg-base-300"
            href={product.github}
            target="_blank"
          >
            {t("View on GitHub")}
          </Link>
        </div>
        {/* Key stats bar */}
        <div
          className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center divide-x divide-base-content/15 rounded-2xl border border-base-content/10 bg-base-100/80 px-2 py-4 shadow-sm backdrop-blur [animation:fade-in-up_0.6s_ease_both]"
          style={{ animationDelay: "0.75s" }}
        >
          {(
            [
              {
                stat: <CountUp target={1} suffix="M+" />,
                label: t("Write TPS"),
              },
              {
                stat: <CountUp target={4} suffix="-in-1" />,
                label: t("Signal Types"),
              },
              { stat: "SQL", label: t("Native CEP") },
              { stat: "OTel", label: t("Native Ingest") },
              { stat: "Auto", label: t("Rollup") },
            ] as { stat: React.ReactNode; label: string }[]
          ).map(({ stat, label }, i) => (
            <div key={i} className="flex flex-col items-center px-5 py-1">
              <span className="text-2xl font-bold text-primary">{stat}</span>
              <span className="mt-0.5 text-xs text-base-content/50">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. One Pipeline, All Signals — 3-layer architecture ── */}
      <section className="w-full bg-base-200/40 px-8 py-16 lg:py-20">
        <h2 className="mb-12 text-center text-3xl font-semibold text-base-content lg:text-4xl">
          <span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
            {t("One Pipeline, All Signals")}
          </span>
        </h2>

        <div className="mx-auto flex max-w-4xl flex-col gap-3">
          {/* Layer 01 — Ingest */}
          <div className="rounded-2xl border border-base-content/[0.08] bg-base-100/40 p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-8">
              {/* Left: number + badge + title */}
              <div className="flex shrink-0 flex-col gap-2 lg:w-48">
                <span className="text-5xl font-black leading-none text-base-content/[0.06]">
                  01
                </span>
                <span className="inline-flex w-fit items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
                  {t("Ingest")}
                </span>
                <h3 className="text-base font-semibold text-base-content">
                  {t("Data Sources → LinDB")}
                </h3>
              </div>
              {/* Center: icon cluster */}
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { icon: ArrowUpTrayIcon, label: "OTel Collector" },
                  { icon: CpuChipIcon, label: "OTel SDK" },
                  { icon: SignalIcon, label: "Agent · Sidecar" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-xl border border-base-content/[0.08] bg-base-200/50 px-3 py-2 text-xs text-base-content/60"
                  >
                    <Icon className="size-4 shrink-0 stroke-indigo-500 dark:stroke-indigo-400" />
                    {label}
                  </div>
                ))}
                <div className="flex items-center gap-1 text-base-content/30">
                  <ArrowRightIcon className="hidden size-4 lg:block" />
                  <ChevronDownIcon className="block size-4 lg:hidden" />
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-indigo-400/40 bg-indigo-50/60 px-3 py-2 text-xs font-medium text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300">
                  <SignalIcon className="size-4 shrink-0 stroke-indigo-500" />
                  LinDB Ingest
                </div>
              </div>
              {/* Right: desc + badges */}
              <div className="flex flex-col gap-2 lg:ml-auto lg:text-right">
                <p className="text-sm leading-relaxed text-base-content/55">
                  {t(
                    "Receives telemetry via OTLP gRPC / HTTP — zero adapters required.",
                  )}
                </p>
                <div className="flex flex-wrap gap-1.5 lg:justify-end">
                  <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
                    OpenTelemetry Native
                  </span>
                  <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs text-sky-700 dark:bg-sky-950/60 dark:text-sky-300">
                    OTLP gRPC / HTTP
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-0.5 text-base-content/20">
              <div className="h-5 w-px border-l-2 border-dashed border-current" />
              <ChevronDownIcon className="size-4" />
            </div>
          </div>

          {/* Layer 02 — Store & Process */}
          <div className="rounded-2xl border border-base-content/[0.08] bg-base-100/40 p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-8">
              {/* Left */}
              <div className="flex shrink-0 flex-col gap-2 lg:w-48">
                <span className="text-5xl font-black leading-none text-base-content/[0.06]">
                  02
                </span>
                <span className="inline-flex w-fit items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-700 dark:bg-purple-950/60 dark:text-purple-300">
                  {t("Store & Process")}
                </span>
                <h3 className="text-base font-semibold text-base-content">
                  {t("Unified Storage + CEP")}
                </h3>
              </div>
              {/* Center */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex flex-col gap-2 rounded-xl border border-base-content/[0.08] bg-base-200/50 px-4 py-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-base-content/70">
                    <CircleStackIcon className="size-4 stroke-purple-500" />
                    {t("Unified Storage")}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Metrics", "Traces", "Logs", "Exemplars"].map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-base-300/60 px-2 py-0.5 text-xs text-base-content/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-base-content/[0.08] bg-base-200/50 px-4 py-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-base-content/70">
                    <CpuChipIcon className="size-4 stroke-emerald-500" />
                    CEP / LinQL
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className="flex flex-col gap-2 lg:ml-auto lg:text-right">
                <p className="text-sm leading-relaxed text-base-content/55">
                  {t(
                    "Single engine stores all signal types. SQL-based CEP rules correlate events in real time.",
                  )}
                </p>
                <div className="flex flex-wrap gap-1.5 lg:justify-end">
                  <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-700 dark:bg-purple-950/60 dark:text-purple-300">
                    4-in-1 Storage
                  </span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                    Real-time Correlation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-0.5 text-base-content/20">
              <div className="h-5 w-px border-l-2 border-dashed border-current" />
              <ChevronDownIcon className="size-4" />
            </div>
          </div>

          {/* Layer 03 — Derive & Alert */}
          <div className="rounded-2xl border border-base-content/[0.08] bg-base-100/40 p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-8">
              {/* Left */}
              <div className="flex shrink-0 flex-col gap-2 lg:w-48">
                <span className="text-5xl font-black leading-none text-base-content/[0.06]">
                  03
                </span>
                <span className="inline-flex w-fit items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-700 dark:bg-orange-950/60 dark:text-orange-300">
                  {t("Derive & Alert")}
                </span>
                <h3 className="text-base font-semibold text-base-content">
                  {t("Outputs")}
                </h3>
              </div>
              {/* Center */}
              <div className="flex flex-wrap items-center gap-3">
                {[
                  {
                    label: t("Derived Metrics"),
                    color: "stroke-orange-500",
                    bg: "bg-orange-50/60 dark:bg-orange-950/30",
                  },
                  {
                    label: t("Exemplars"),
                    color: "stroke-sky-500",
                    bg: "bg-sky-50/60 dark:bg-sky-950/30",
                  },
                  {
                    label: t("Alerts"),
                    color: "stroke-red-500",
                    bg: "bg-red-50/60 dark:bg-red-950/30",
                  },
                ].map(({ label, bg }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2 rounded-xl border border-base-content/[0.08] px-3 py-2 text-xs text-base-content/70 ${bg}`}
                  >
                    <SparklesIcon className="size-4 shrink-0 stroke-orange-500 dark:stroke-orange-400" />
                    {label}
                  </div>
                ))}
              </div>
              {/* Right */}
              <div className="flex flex-col gap-2 lg:ml-auto lg:text-right">
                <p className="text-sm leading-relaxed text-base-content/55">
                  {t(
                    "CEP rules emit derived metrics, attach exemplars, and fire alerts — all from a single SQL rule.",
                  )}
                </p>
                <div className="flex flex-wrap gap-1.5 lg:justify-end">
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs text-orange-700 dark:bg-orange-950/60 dark:text-orange-300">
                    Auto Rollup
                  </span>
                  <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-700 dark:bg-red-950/60 dark:text-red-300">
                    SQL-based Alerting
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Why LinDB? — 6-card grid ── */}
      <section className="beams-0 w-full">
        <div className="beams-1 relative px-8 pb-20 lg:pb-24">
          <div className="py-8 text-center lg:py-12">
            <span className="bg-gradient-to-tl from-blue-600 to-purple-400 bg-clip-text text-4xl font-bold text-transparent">
              {t("Why LinDB?")}
            </span>
          </div>
          <div className="mx-auto grid max-w-[85rem] gap-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:gap-8">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-t-2 border-base-content/10 border-t-indigo-400/60 bg-base-100 p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-indigo-50/70 p-2.5 dark:bg-indigo-950/30">
                  <Icon className="size-7 stroke-indigo-500 dark:stroke-indigo-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-base-content">
                  {t(title)}
                </h3>
                <p className="text-sm leading-relaxed text-base-content/60">
                  {t(desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Key Features ── */}
      <section className="w-full bg-base-200/40 px-8 py-16 lg:py-20">
        <div className="pb-10 text-center">
          <span className="bg-gradient-to-tl from-blue-600 to-purple-400 bg-clip-text text-3xl font-semibold text-transparent">
            {t("Key Features")}
          </span>
        </div>

        {/* Big card: left feature nav + right code block */}
        <div className="mx-auto flex max-w-5xl flex-col overflow-hidden rounded-none border-y border-base-content/[0.08] lg:flex-row lg:rounded-2xl lg:border">
          {/* Left: feature nav list */}
          <div className="flex flex-col lg:w-72 lg:shrink-0 lg:border-r lg:border-base-content/[0.08]">
            {keyFeatures.map(({ icon: Icon, title, desc }, i) => (
              <button
                key={title}
                onClick={() => setActiveFeature(i)}
                className={`group flex items-start gap-4 border-l-2 px-6 py-5 text-left transition-colors ${
                  i === activeFeature
                    ? "border-indigo-500 bg-indigo-50/60 dark:bg-indigo-950/30"
                    : "border-transparent hover:bg-base-200/50"
                }`}
              >
                <div
                  className={`mt-0.5 inline-flex shrink-0 rounded-lg p-1.5 transition-colors ${
                    i === activeFeature
                      ? "bg-indigo-100 dark:bg-indigo-950/60"
                      : "bg-base-200/60"
                  }`}
                >
                  <Icon
                    className={`size-4 ${
                      i === activeFeature
                        ? "stroke-indigo-500 dark:stroke-indigo-400"
                        : "stroke-base-content/40"
                    }`}
                  />
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      i === activeFeature
                        ? "text-indigo-700 dark:text-indigo-300"
                        : "text-base-content"
                    }`}
                  >
                    {t(title)}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-base-content/50">
                    {t(desc)}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: code editor pane */}
          <div className="flex flex-1 flex-col">
            {/* Editor chrome bar */}
            <div className="flex h-9 items-center gap-1.5 border-b border-base-content/[0.08] bg-base-200/60 px-4">
              <span className="size-2.5 rounded-full bg-base-content/15" />
              <span className="size-2.5 rounded-full bg-base-content/15" />
              <span className="size-2.5 rounded-full bg-base-content/15" />
              <span className="ml-4 text-xs text-base-content/30">
                query.sql
              </span>
            </div>
            {/* Shiki highlighted code */}
            <div className="flex-1 overflow-auto p-5 [&_.shiki]:!bg-transparent [&_pre]:!bg-transparent [&_pre]:!p-0">
              <CodeBlock
                key={activeFeature}
                code={keyFeatures[activeFeature].sql}
                lang="sql"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Resources / Learn More ── */}
      <section className="w-full bg-base-200/30 px-8 py-16 lg:py-20">
        <h2 className="mb-12 text-center text-3xl font-semibold text-base-content lg:text-4xl">
          <span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
            {t("Explore & Learn")}
          </span>
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {product.resources.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="group rounded-xl border border-base-content/[0.07] bg-transparent p-5 transition-all duration-200 hover:border-base-content/15 hover:bg-base-100/70 hover:shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <Icon className="size-5 stroke-indigo-500 dark:stroke-indigo-400" />
                <h3 className="text-base font-semibold text-base-content">
                  {t(title)}
                </h3>
              </div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-1.5 text-sm text-base-content/60 transition-colors hover:text-base-content"
                    >
                      <ArrowRightIcon className="size-3 shrink-0" />
                      {t(item.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const getStaticProps = async (context: {
  params: { product: string; locale: string };
}) => {
  return {
    props: {
      product: context.params.product,
      ...(await getI18nProps(context.params.locale || docs.i18n.defaultLocale)),
    },
  };
};

export const getStaticPaths = () => {
  const paths = [
    {
      params: {
        product: "lindb",
        locale: "zh",
      },
    },
  ];
  return {
    paths: paths,
    fallback: false,
  };
};

export default Products;
