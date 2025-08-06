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
"use client";
import React, { useEffect, useState } from "react";
import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import classNames from "classnames";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    const theme = localStorage.theme;
    if (theme === "light" || theme === "dark") {
      setTheme(theme);
    } else {
      setTheme("system");
    }
  }, []);

  const toggleTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.theme = "dark";
      setTheme("dark");
    } else if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-theme", "dark");
      }
      localStorage.removeItem("theme");
      setTheme("system");
    }
    // close dropdown
    const el = document.activeElement as HTMLElement;
    if (el && el.blur) {
      el.blur();
    }
  };

  const themeBtnCls = (t: string) => {
    return classNames(
      {
        "text-primary bg-base-content/10": theme === t,
      },
      "flex w-full items-center gap-2 px-3 py-1.5 hover:bg-base-content/10",
    );
  };
  const themeIconCls = (t: string) => {
    return classNames("size-[20px] flex items-center", {
      "fill-base-content/70": theme !== t,
      "fill-primary": theme === t,
    });
  };
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} className="flex items-center">
        <MoonIcon className="hidden size-5 fill-primary dark:inline" />
        <SunIcon className="size-5 fill-primary dark:hidden " />
      </div>
      <ul
        tabIndex={1}
        className="dropdown-content z-99 mt-2 flex w-36 flex-col gap-1 border border-base-content/10 bg-base-100 p-2"
      >
        <li
          onClick={() => toggleTheme("light")}
          className={themeBtnCls("light")}
        >
          <SunIcon className={themeIconCls("light")} />
          Light
        </li>
        <li onClick={() => toggleTheme("dark")} className={themeBtnCls("dark")}>
          <MoonIcon className={themeIconCls("dark")} />
          Dark
        </li>
        <li
          onClick={() => toggleTheme("system")}
          className={classNames("cursor-pointer", themeBtnCls("system"))}
        >
          <ComputerDesktopIcon className={themeIconCls("system")} />
          System
        </li>
      </ul>
    </div>
  );
};
