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
import type { AppProps } from "next/app";
import "@site/css/globals.css";
import { Navbar, Footer } from "@site/components";

export default function RootApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-auto overflow-auto">
          <Component {...pageProps} />;
        </div>
        <div className="px-4 lg:px-8">
          <Footer />
        </div>
      </div>
    </>
  );
}
