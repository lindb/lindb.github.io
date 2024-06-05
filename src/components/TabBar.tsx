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

export const TabBar = () => {
  return (
    <div className="flex flex-none items-center border-y border-b-sky-300 border-t-transparent px-4 py-1 text-sky-300">
      Terminal
      <svg
        viewBox="0 0 4 4"
        className="ml-2.5 size-1 flex-none overflow-visible text-slate-500"
      >
        <path
          d="M-1 -1L5 5M5 -1L-1 5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M5 11.8574L8.5 8.4287L5 5"
          stroke="black"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9 13.5H14"
          stroke="black"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <rect
          x="0.5"
          y="0.5"
          width="17"
          height="17"
          rx="1.5"
          stroke="black"
        ></rect>
      </svg>
    </div>
  );
};
