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
import { Sidebar } from "@site/components";
import React from "react";
import { getSidebar } from "@site/navs/documentation";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function DocsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string[]; lang: string };
}) {
  const sidebar = getSidebar(params.lang, params.slug);
  return (
    <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
      <Sidebar sidebarItems={sidebar} />
      <div className="lg:pl-36 xl:pl-[19.5rem]">{children}</div>
    </div>
  );
}
