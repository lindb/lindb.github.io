import React from "react";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <div>
      <p>Current locale: {lang}</p>
      <p>This text is rendered on the server: </p>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "/en/docs/my-mdx-page", lang: "en" },
    { slug: "hello", lang: "en" },
  ];
}
