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
import React, { ReactNode } from "react";
import { languagePrefix } from "@site/utils/utils";
import clsx from "clsx";
import { CommandLineIcon } from "@heroicons/react/24/outline";

export const CodeSnippet = (props: {
  children?: ReactNode;
  className?: string;
}) => {
  const findLanguage = () => {
    const classes = (props.className || "").split(" ");
    const languageClass = Array.isArray(classes)
      ? classes.findLast(
          (d) => typeof d === "string" && d.startsWith(languagePrefix),
        )
      : undefined;

    const lang =
      typeof languageClass === "string"
        ? languageClass.slice(languagePrefix.length)
        : "text";

    if (!lang) {
      return;
    }
    return lang;
  };
  const language = findLanguage();
  if (!language || (language !== "shell" && language !== "bash")) {
    return (
      <pre {...props} className={clsx("mt-0 p-3", props.className)}>
        {props.children}
      </pre>
    );
  }

  return (
    <div className="bg-slate-100/80  ring-1 ring-slate-300 dark:bg-slate-700/80 dark:ring-white/20">
      <div className="border-b border-slate-300  p-2 text-xs text-slate-900 dark:border-b-white/20 dark:text-sky-300">
        <div className="flex flex-none items-center gap-1 ">
          <CommandLineIcon className="size-4" />
          Terminal
        </div>
      </div>
      <pre {...props} className={clsx("mt-0 border-0 p-3", props.className)}>
        {props.children}
      </pre>
    </div>
  );
};
