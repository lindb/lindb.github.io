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
import Link from "../Link";
import { ListBulletIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { GithubIcon } from "@site/icons";
import { PageInfo, TOCItem } from "@site/types";
import { useTranslation } from "next-i18next";
import { docs } from "@site/docs.config";
import classNames from "classnames";

export const TableOfContents = (props: {
  page: PageInfo;
  tocItems: TOCItem[];
}) => {
  const { tocItems, page } = props;
  const [activeId, setActiveId] = useState("");
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const getPagePath = () => {
    if (i18n.language === docs.i18n.defaultLocale) {
      return page.path;
    }
    return "/i18n/" + i18n.language + page.path;
  };

  useEffect(() => {
    let frameId = 0;
    const handleScroll = () => {
      if (frameId > 0) {
        cancelAnimationFrame(frameId);
      }
      frameId = requestAnimationFrame(() => {
        let lastHeadingId = "";
        for (const heading of tocItems) {
          const element = document.getElementById(heading.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
              lastHeadingId = heading.id;
              break;
            }
          }
        }
        if (lastHeadingId) {
          setActiveId(lastHeadingId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId > 0) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [tocItems]);

  const Content = () => {
    return (
      <div>
        <h5 className="mb-2 text-sm leading-6 font-semibold">
          {t("On this page")}
        </h5>
        <ul className="text-sm leading-6">
          {tocItems.map((item: TOCItem, idx: number) => {
            return (
              <li key={idx} onClick={() => setOpen(false)}>
                <Link
                  href={`#${item.id}`}
                  className={classNames("flex items-center gap-1 py-1", {
                    "text-primary font-semibold": activeId === item.id,
                    "ml-4": item.level > 2,
                    "group flex items-start py-1": item.level > 2,
                  })}
                >
                  <span className="flex h-[24px] items-center">
                    {item.level > 2 && <ChevronRightIcon className="size-3" />}
                  </span>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="border-t border-base-content/10 pt-3 text-sm leading-6">
          <Link
            href={docs.docRepo + getPagePath()}
            className="flex items-center gap-2"
          >
            <GithubIcon className="size-4" />
            {t("Edit this page on Github")}
          </Link>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="drawer drawer-end">
        <input
          id="toc-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={open}
          readOnly
        />
        <div className="fixed top-[72px] right-2 z-45 drawer-content flex items-center bg-base-content/10 lg:hidden">
          <label htmlFor="toc-drawer" onClick={() => setOpen(true)}>
            <ListBulletIcon className="size-6" />
          </label>
        </div>
        <div className="drawer-side z-100 ">
          <label
            htmlFor="toc-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={() => setOpen(false)}
          ></label>
          <div className="min-h-full w-[80%] bg-base-100 p-2 text-base-content">
            <Content />
          </div>
        </div>
      </div>
      <div className="fixed top-[80px] right-0 hidden overflow-y-auto lg:block lg:w-72">
        <Content />
      </div>
    </>
  );
};
