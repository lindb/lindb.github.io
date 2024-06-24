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
import { ReleaseInfo } from "@site/types";
import { getReleases } from "@site/utils/docs";
import { getI18nProps } from "@site/utils/i18n";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { GetStaticPaths } from "next";
import React, { useState } from "react";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { CodeBlock, DocLink } from "@site/components";
import { DockerIcon, LinuxIcon, MacIcon, WindowsIcon } from "@site/icons";

const findDownloadUrl = (release: ReleaseInfo, name: string) => {
  return (release.assets || []).find((item) => item.name.startsWith(name));
};

const ProductDownload = (props: { releases: ReleaseInfo[] }) => {
  const { t } = useTranslation();
  const { releases } = props;
  const cmds = (release: ReleaseInfo, pkg: string) => {
    const amd = findDownloadUrl(
      release,
      `lindb-${release.tag_name}-${pkg}-amd64`,
    );
    const arm = findDownloadUrl(
      release,
      `lindb-${release.tag_name}-${pkg}-arm64`,
    );
    return (
      <div className="flex flex-col gap-4">
        {amd && (
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold dark:text-white">
              Standalone Binaries(64 Bit/AMD)
            </h2>
            <ul className="list-inside list-decimal text-sm">
              <li className="py-2">
                <span>{t("Downloads")}</span>
                <CodeBlock
                  className="pt-2"
                  code={`wget ${amd.browser_download_url}`}
                />
              </li>
              <li className="py-2">
                {t("Uncompress")}
                <CodeBlock className="pt-2" code={`tar -zxvf ${amd.name}`} />
              </li>
            </ul>
          </div>
        )}
        {arm && (
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold dark:text-white">
              Standalone Binaries(64 Bit/ARM)
            </h2>
            <ul className="list-inside list-decimal text-sm">
              <li className="py-2">
                <span>{t("Downloads")}</span>
                <CodeBlock
                  className="py-2"
                  code={`wget ${arm.browser_download_url}`}
                />
              </li>
              <li className="py-2">
                {t("Uncompress")}
                <CodeBlock code={`tar -zxvf ${arm.name} `} className="pt-2" />
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  };

  const osList = [
    {
      name: "Linux",
      icon: LinuxIcon,
      cmds: (release: ReleaseInfo) => {
        return cmds(release, "linux");
      },
    },
    {
      name: "Windows",
      icon: WindowsIcon,
      cmds: (release: ReleaseInfo) => {
        const windows = findDownloadUrl(
          release,
          `lindb-${release.tag_name}-windows-amd64`,
        );
        if (!windows) {
          return null;
        }
        return (
          <>
            <h2 className="text-lg font-semibold dark:text-white">
              Standalone Windows Binaries(64 Bit)
            </h2>
            <div className="prose dark:prose-invert">
              <DocLink href={windows.browser_download_url}>
                Download the zip file
              </DocLink>
            </div>
          </>
        );
      },
    },
    {
      name: "MacOS",
      icon: MacIcon,
      cmds: (release: ReleaseInfo) => {
        return cmds(release, "darwin");
      },
    },
    {
      name: "Docker",
      icon: DockerIcon,
      cmds: (release: ReleaseInfo) => {
        return (
          <>
            <h2 className="text-lg font-semibold dark:text-white">Docker</h2>
            <CodeBlock
              className="pt-2"
              code={`docker run -d --name=lindb -p 9000:9000 lindata/lindb:${
                release?.tag_name || "latest"
              } lind standalone run`}
            />
          </>
        );
      },
    },
  ];
  const [selected, setSelected] = useState(releases[0]);
  const [currentOS, setCurrentOS] = useState(osList[0]);

  const getHref = () => {
    switch (currentOS.name) {
      case "Docker":
        return "/docs/lindb/getting-started/docker";
      default:
        return "/docs/lindb/getting-started/package?tab=" + currentOS.name;
    }
  };
  return (
    <div className="flex w-full flex-1 justify-center lg:my-6 lg:px-12">
      <div className="m-8 flex max-w-8xl flex-1 flex-col gap-4">
        <h2 className="mb-6 text-3xl font-bold text-neutral-900 lg:text-4xl dark:text-white">
          {t("Downloads")} LinDB
        </h2>
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-center gap-4">
            <div className="w-32">{t("Version")}:</div>
            <div>
              <Listbox value={selected} onChange={setSelected}>
                <ListboxButton
                  className={clsx(
                    "relative block w-48 rounded-sm bg-slate-100 py-1.5 pl-3 pr-8 text-left text-sm/6 text-current dark:bg-slate-800 dark:text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                  )}
                >
                  {selected.name}
                  <ChevronDownIcon
                    className="fill-current/60 group pointer-events-none absolute right-2.5 top-2.5 size-4 dark:fill-white"
                    aria-hidden="true"
                  />
                </ListboxButton>
                <Transition
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <ListboxOptions
                    anchor="bottom"
                    className="mt-1 w-[var(--button-width)] border border-slate-200/5 bg-slate-100 p-1 dark:bg-slate-800"
                  >
                    {releases.map((release) => (
                      <ListboxOption
                        key={release.name}
                        value={release}
                        onSelect={() => setSelected(release)}
                        className="group flex cursor-default select-none items-center py-1.5  data-[focus]:bg-white/10"
                      >
                        <CheckIcon className="invisible mx-2 size-4 fill-current group-data-[selected]:visible dark:fill-white" />
                        <div className="text-sm/6 text-current dark:text-white">
                          {release.name}
                        </div>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Transition>
              </Listbox>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32">{t("License")}:</div>
            <div className="dark:text-white">Apache 2.0</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32">{t("Release Date")}:</div>
            <div className=" dark:text-white">{selected.published_at}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32">{t("Release Note")}:</div>
            <div className="prose dark:prose-invert">
              <DocLink href={"/docs/lindb/release-notes#" + selected.name}>
                {t(`What's New in`)} LinDB {selected.name}
              </DocLink>
            </div>
          </div>
        </div>
        <div className="flex gap-4 lg:gap-8">
          {osList.map((os) => {
            const Icon = os.icon;
            const active = os.name === currentOS.name;
            return (
              <button
                key={os.name}
                onClick={() => setCurrentOS(os)}
                className={clsx(
                  "group flex flex-col items-center gap-2 text-sm font-semibold",
                  {
                    "text-sky-500": active,
                    "group:hover:text-slate-00": !active,
                  },
                )}
              >
                <Icon
                  className={clsx("size-10 ", {
                    "text-slate-300 group-hover:fill-slate-400 dark:fill-slate-600 dark:group-hover:fill-slate-500":
                      !active,
                    "fill-sky-500": active,
                  })}
                />
                {os.name}
              </button>
            );
          })}
        </div>
        <div>{currentOS.cmds(selected)}</div>

        <div className="prose dark:prose-invert">
          <DocLink href={getHref()}>
            {t("Read the installation guide for more information.")}
          </DocLink>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context: {
  params: { locale: string; product: string };
}) => {
  const releases = await getReleases();
  return {
    props: {
      releases,
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

export default ProductDownload;
