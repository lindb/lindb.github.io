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
import { Navbar, Footer, BackgroundBeams } from "@site/components";
import { DocContextProvider } from "@site/contexts";
import { useRouter } from "next/router";

const RootApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <DocContextProvider>
      <BackgroundBeams />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <Component {...pageProps} />
        {!router.pathname.startsWith("/[locale]/docs") && (
          <div className="px-4 lg:px-8">
            <Footer />
          </div>
        )}
      </div>
    </DocContextProvider>
  );
};

export default RootApp;
