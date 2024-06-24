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
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { getHighlighter } from "shiki";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let shikiHighlighter: any = null;

const highlightCode = async (code: string, lang: string) => {
  if (!shikiHighlighter) {
    shikiHighlighter = await getHighlighter({
      themes: ["material-theme-lighter", "catppuccin-macchiato"],
      langs: ["sh", "sql"],
    });
  }
  const highlightedLines = shikiHighlighter.codeToHtml(code, {
    lang: lang,
    themes: {
      light: "material-theme-lighter",
      dark: "catppuccin-macchiato",
    },
    colorReplacements: { "#24273a": "#1e293b" },
  });
  return highlightedLines;
};

export const CodeBlock = (props: {
  code: string;
  lang?: string;
  className?: string;
}) => {
  const { code, lang = "sh", className } = props;
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    highlightCode(code, lang).then(setHighlightedCode);
  }, [code]);

  return (
    <div
      className={clsx("code-block prose grid", className)}
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
};
