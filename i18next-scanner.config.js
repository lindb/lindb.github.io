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
module.exports = {
  input: [
    "src/**/*.{ts,tsx}", // Specify the file types to scan (e.g., .js and .jsx)
  ],
  output: "./",
  options: {
    debug: false, // Set to true for debugging output
    removeUnusedKeys: false, // Remove unused keys from translations files
    sort: true, // Sort keys in translation files
    func: {
      // The function names used for translation keys
      list: ["t", "i18next.t", "i18n.t"],
      extensions: [".ts", ".tsx"],
    },
    lngs: ["zh"], // List the languages you want to support
    defaultLng: "en", // The default language
    resource: {
      // The path where translation files will be saved
      loadPath: "./i18n/{{lng}}/{{ns}}.json",
      savePath: "./i18n/{{lng}}/{{ns}}.json",
    },
  },
  ns: ["translation"], // Namespace for your translations
};
