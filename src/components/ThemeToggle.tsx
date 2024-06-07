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
"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

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
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      }
      localStorage.removeItem("theme");
      setTheme("system");
    }
  };

  const themeBtnCls = (t: string) => {
    return clsx(
      "group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10",
      {
        "text-sky-500 bg-slate-400/10 dark:bg-slate-600/30": theme === t,
      },
    );
  };
  const themeIconCls = (t: string) => {
    return clsx("h-5 ", {
      "fill-slate-400/20 stroke-slate-400 dark:fill-slate-500/20 dark:stroke-slate-500":
        theme !== t,
      "fill-sky-400/20 stroke-sky-500": theme === t,
    });
  };
  return (
    <Menu>
      <MenuButton className="flex items-center">
        <SunIcon className="h-5 fill-sky-400/20 stroke-sky-500 dark:hidden" />
        <MoonIcon className="hidden h-5 fill-sky-400/20 stroke-sky-500 dark:inline" />
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className="z-50 mt-6 w-40 origin-top-right rounded-sm bg-white p-1 text-sm/6 font-semibold text-slate-700 ring-1 ring-slate-900/10 [--anchor-gap:var(--spacing-1)] focus:outline-none dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-500/20"
      >
        <MenuItem>
          <button
            onClick={() => toggleTheme("light")}
            className={themeBtnCls("light")}
          >
            <SunIcon className={themeIconCls("light")} />
            Light
          </button>
        </MenuItem>
        <MenuItem>
          <button
            onClick={() => toggleTheme("dark")}
            className={themeBtnCls("dark")}
          >
            <MoonIcon className={themeIconCls("dark")} />
            Dark
          </button>
        </MenuItem>
        <MenuItem>
          <button
            onClick={() => toggleTheme("system")}
            className={themeBtnCls("system")}
          >
            <ComputerDesktopIcon className={themeIconCls("system")} />
            System
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};
