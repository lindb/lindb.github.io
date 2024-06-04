// import nextMDX from "@next/mdx";
// import remarkPrism from "remark-prism";
// import remarkGfm from "remark-gfm";
//
// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [
//       [
//         // remarkGfm,
//         remarkPrism,
//         {
//           transformInlineCode: true,
//           /* options */
//           plugins: [
//             "autolinker",
//             "command-line",
//             "data-uri-highlight",
//             "diff-highlight",
//             "inline-color",
//             "keep-markup",
//             "line-numbers",
//             "show-invisibles",
//             "treeview",
//           ],
//         },
//       ],
//     ],
//   },
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Optional: Change the output directory `out` -> `dist`
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

export default nextConfig;
