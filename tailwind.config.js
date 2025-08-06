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
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            th: {
              textAlign: "inherit",
            },
            td: {
              textAlign: "inherit",
            },
          },
        },
        lin: {
          css: {
            maxWidth: "none",
            color: "var(--color-base-content)",
            hr: {
              borderColor: "var(--color-slate-100)",
              marginTop: "3em",
              marginBottom: "3em",
            },
            ".lead": {
              fontSize: "1.125em",
              lineHeight: "calc(32 / 18)",
            },
            "h1, h2, h3": {
              letterSpacing: "-0.025em",
              // marginTop: `1em`,
              // marginBottom: `100px`,
            },
            p: { marginBottom: "0.75em", marginTop: "0.75em" },
            h2: {
              fontSize: "1.25em",
              fontWeight: "600",
            },
            h3: {
              fontSize: "1.125em",
              // marginTop: "2.4em",
              // marginBottom: "1em",
            },
            h4: {
              // marginTop: "2.5em",
              // marginBottom: "0.75em",
              fontSize: "1em",
              fontWeight: "600",
            },
            "h2 small, h3 small, h4 small": {
              color: "var(--color-slate-500)",
              fontWeight: 500,
            },
            "h2, h3, h4": {
              "scroll-margin-top": "var(--scroll-mt)",
            },
            "h2 code, h3 code": {
              font: "inherit",
            },
            a: {
              fontWeight: "var(--font-weight-semibold)",
              textDecoration: "none",
              borderBottom: `1px solid var(--color-indigo-500)`,
            },
            "a:hover": {
              borderBottomWidth: "2px",
            },
            code: {
              fontWeight: "var(--font-weight-semibold)",
              borderRadius: "0px !important",
            },
            strong: {
              color: "var(--color-slate-900)",
            },
            ul: {
              fontWeight: "var(--font-weight-semibold)",
              paddingLeft: "1em",
              marginTop: "0.5em",
              marginBottom: "0.5em",
            },
          },
        },
        dark: {
          css: {
            "--tw-prose-lead": "var(--color-slate-400)",
            "h1, h2, h3, h4, thead th": {
              color: "var(--color-slate-200)",
            },
            "h2 small, h3 small, h4 small": {
              color: "var(--color-slate-400)",
            },
            a: {
              color: "var(--color-white)",
            },
            code: {
              color: "var(--color-white)",
            },
            strong: {
              color: "var(--color-slate-200)",
            },
          },
        },
      },
    },
  },
};
