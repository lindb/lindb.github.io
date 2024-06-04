import React from "react";
import { TabBar } from "@site/components";

export const CodeSnippet = ({ children }) => {
  return (
    <div>
      <TabBar />
      <div>{children}</div>
    </div>
  );
};
