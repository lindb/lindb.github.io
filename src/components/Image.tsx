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

export const Image = (props: {
  className?: string;
  src?: string;
  alt?: string;
}) => {
  const { alt, src = "" } = props;
  if (src.endsWith("#browser")) {
    return (
      <>
        <span className="not-prose flex flex-col bg-slate-100/80  ring-1 ring-slate-300 dark:bg-slate-900/30 dark:ring-white/20">
          <span className="flex gap-2 bg-white/30 p-3 dark:bg-slate-800/50">
            <span className="block size-2.5 rounded-full bg-red-500" />
            <span className="block size-2.5 rounded-full bg-orange-500" />
            <span className="block size-2.5 rounded-full bg-green-500" />
          </span>
          <img {...props} decoding="async" className="mx-auto" />
        </span>
        {alt && (
          <span className="mt-2 flex flex-col text-center text-sm font-semibold italic">
            {alt}
          </span>
        )}
      </>
    );
  }
  return (
    <>
      <span className="not-prose flex flex-col text-center">
        <img {...props} decoding="async" className="mx-auto" />
        {alt && (
          <span className="mt-2 text-sm font-semibold italic">{alt}</span>
        )}
      </span>
    </>
  );
};
