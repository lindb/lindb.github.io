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
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface CommitInfo {
  author: string;
  date: string;
}

export interface SidebarItem {
  index: number;
  title: string;
  href?: string;
  children?: SidebarItem[];
}

export interface DocMeta {
  title?: string;
  sidebar?: string;
  description?: string;
  sidebarHide?: boolean;
}

export interface PageInfo {
  path: string;
  product?: string;
  slug?: string[];
  title?: string;
  meta?: DocMeta;
  commitInfo?: CommitInfo;
  parent?: string;
}

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export interface MDXFile {
  content: string;
  meta: DocMeta;
}

export interface MDX {
  source: MDXRemoteSerializeResult;
  toc: TOCItem[];
}

export interface ReleaseInfo {
  name: string;
  published_at: string;
  body: string;
  mdxBody: MDXRemoteSerializeResult;
  assets: {
    name: string;
    size: number;
    browser_download_url: string;
  }[];
}
