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
import { PageInfo } from "@site/navs/documentation";

export const getHeadingId = (heading: string) => {
  return heading.replace(/ /g, "_").toLowerCase();
};

export const getDocPages = (sidebarItems: PageInfo[]) => {
  const result: PageInfo[] = [];
  sidebarItems.forEach((page) => {
    if (page.children && page.children.length > 0) {
      page.children.forEach((child) => {
        result.push(child);
      });
    } else {
      result.push(page);
    }
  });
  return result;
};
