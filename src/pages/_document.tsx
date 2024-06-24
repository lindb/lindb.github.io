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
import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const RootDocument = () => {
  return (
    <Html
      lang="en"
      className="dark [--scroll-mt:9.875rem] [scrollbar-gutter:stable] lg:[--scroll-mt:6.3125rem]"
    >
      <Head>
        <link rel="icon" href="/img/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/instantsearch.css@8/themes/satellite-min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0B1120')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `,
          }}
        />
      </Head>
      <body className="flex min-h-screen flex-col bg-white text-slate-500 antialiased dark:bg-slate-900 dark:text-slate-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default RootDocument;
