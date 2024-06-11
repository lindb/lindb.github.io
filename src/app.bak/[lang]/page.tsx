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
import { DocSearch, Footer, Navbar } from "@site/components";
import React from "react";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-4">
        <div>
          <DocSearch />
          <p>Current locale: {lang}</p>
          <p>This text is rendered on the server: </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return [{ slug: "hello", lang: "en" }];
}
