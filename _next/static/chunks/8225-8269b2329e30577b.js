"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8225],{8225:function(e,t,i){i.r(t),i.d(t,{__N_SSG:function(){return f},default:function(){return v}});var s=i(2676),a=i(7798),l=i(5271),n=i(9056),r=i(7442);let d=l.forwardRef(function(e,t){let{title:i,titleId:s,...a}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},a),i?l.createElement("title",{id:s},i):null,l.createElement("path",{fillRule:"evenodd",d:"M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z",clipRule:"evenodd"}))});var o=i(531),c=i.n(o),m=i(8368),g=i(4814);let u=e=>{let{codes:t,lang:i,typingDelay:a=50,className:n}=e,[r,d]=(0,l.useState)(""),o=(0,l.useRef)(0),c=(0,l.useRef)(0),u=(0,l.useRef)(0),h=(0,l.useRef)(performance.now()),x=(0,l.useRef)();(0,l.useMemo)(()=>{x.current=t[c.current%t.length]},[t]);let p=(0,l.useCallback)(e=>{e-h.current>a&&(d(e=>{let t=e+x.current.charAt(o.current);return o.current++,t}),h.current=e),o.current<x.current.length||(o.current=0,c.current++,x.current=t[c.current%t.length],d("")),u.current=requestAnimationFrame(p)},[a,t]);return(0,l.useEffect)(()=>(u.current=requestAnimationFrame(p),()=>cancelAnimationFrame(u.current)),[p]),(0,s.jsx)("div",{className:(0,g.Z)(n),children:(0,s.jsx)(m.d,{code:r,lang:i})})};var h=i(5087);let x={name:"LinDB",title:"What's LinDB?",subTitle:"An open-source, cloud native, horizontally scalable, distributed time-series database.",github:"https://github.com/lindb/lindb",why:"Why LinDB?",resources:[{title:"Getting Started",items:[{name:"Deployment",href:"/docs/lindb/getting-started/package"},{name:"Insert data",href:"/docs/lindb/developer-guide/insert-data"},{name:"Query data",href:"/docs/lindb/developer-guide/query-data"}]},{title:"Get Help",items:[{name:"Feature request",href:"https://github.com/lindb/lindb/issues/new?assignees=&labels=feature&projects=&template=feature-request.md&title=%5Bfeature%5D%3A"},{name:"Bug report",href:"https://github.com/lindb/lindb/issues/new?assignees=&labels=bug&projects=&template=bug-report.md&title=%5Bbug%5D%3A"},{name:"Ask a Question",href:"https://github.com/lindb/lindb/issues/new?assignees=&labels=question&projects=&template=ask-a-question.md&title=%5Bquestion%5D%3A"}]},{title:"Inside LinDB",items:[{name:"Architecture",href:"/docs/lindb/design/architecture"},{name:"Storage",href:"/docs/lindb/design/storage"},{name:"Inverted index",href:"/docs/lindb/design/intervted-index"}]},{title:"Learn More",items:[{name:"Developer Guide",href:"/docs/lindb/developer-guide/connect"},{name:"Admin Console",href:"/docs/lindb/admin-console/index"},{name:"LinQL",href:"/docs/lindb/lin-ql/sql"}]}],features:[{icon:(0,s.jsx)(r.WC,{className:"size-12 stroke-indigo-500 dark:stroke-indigo-400"}),title:"High performance",items:["A single server could easily support more than one million write TPS.","With fundamental techniques like efficient compression storage and parallel computing, LinDB delivers highly optimized query performance."]},{icon:(0,s.jsx)(r.hv,{className:"size-12 stroke-indigo-500 dark:stroke-indigo-400"}),title:"High availability",items:["The multi-channel replication protocol supports any amount of nodes, ensures the system availability."]},{icon:(0,s.jsx)(r.c,{className:"size-12 stroke-indigo-500 dark:stroke-indigo-400"}),title:"Easy to use",items:["Schema-free multi-dimensional data model with Metric, Tags, and Fields.","The LinQL is flexible yet handy for real-time data analytics."]},{icon:(0,s.jsx)(r.Q7,{className:"size-12 stroke-indigo-500 dark:stroke-indigo-400"}),title:"Horizontal scalability",items:["Horizontal scalable is made simple by adding more new broker and storage nodes without too much thinking and manual operations Schema-free multi-dimensional data model with Metric, Tags, and Fields.","Tags-based sharding strategy resolves the hotspot problem"]},{icon:(0,s.jsx)(r.pr,{className:"size-12 fill-indigo-500  dark:fill-indigo-400 "}),title:"Cross Multiple IDCs",items:["LinDB is designed to work under a Multi-Active IDCs cloud architecture. The compute layer of LinDB, called brokers, supports efficient Multi-IDCs aggregation query."]},{icon:(0,s.jsx)(r.PL,{className:"size-12 fill-indigo-500 dark:fill-indigo-400"}),title:"Auto Rollup",items:["LinDB supports rollup in specific intervals(minute, hour and day) automatically after creating the database(unlike the Continuous-Query of InfluxDB)."]}]},p=["# create database\nCREATE DATABASE system_monitoring \nWITH ( numOfShard: 1, \n  replicaFactor: 1, \n  behead: 1h, \n  ahead: 2h) \nROLLUP ( \n  (interval: 10s, retention: 30d), \n  (interval: 10m, retention: 180d));\n",'# query data\nSELECT cpu_usage \nFROM system_monitoring\nWHERE time > now() - 1h AND time < now()\n  AND host="us-east-host-1";',"# aggregate data and grouping region\nSELECT max(cpu_usage) \nFROM system_monitoring\nWHERE time > now() - 1h AND time < now()\nGROUP BY region",'# grouping/having\nSELECT max(cpu_usage) as max_cpu\nFROM system_monitoring\nWHERE time > now() - 1h AND time < now()\n  AND host like "us-east-host*"\nGROUP BY region\nHAVING max_cpu > 0.5'],b=e=>{let{items:t}=e,[i,a]=(0,l.useState)(t[0]),{t:r}=(0,n.$G)();return(0,l.useEffect)(()=>{let e=0,i=setInterval(()=>{a(t[e%t.length]),e++},2e3);return()=>{clearInterval(i)}},[]),(0,s.jsxs)("div",{className:"w-full p-8 lg:max-w-8xl lg:py-16",children:[(0,s.jsx)("div",{className:"pb-7 text-center text-4xl font-semibold text-indigo-500 dark:text-indigo-400",children:r("Key Features")}),(0,s.jsxs)("div",{className:"mb-6 flex flex-col items-center lg:grid lg:grid-cols-12 lg:gap-8",children:[(0,s.jsxs)("div",{className:"mb-6 h-80 w-full bg-slate-200/20 ring-1  ring-slate-300 lg:col-span-5 dark:bg-slate-700/20 dark:ring-white/20",children:[(0,s.jsx)("div",{className:"border-b border-slate-300  p-2 text-xs text-slate-900 dark:border-b-white/20 dark:text-sky-300",children:(0,s.jsxs)("div",{className:"flex flex-none items-center gap-1 ",children:[(0,s.jsx)(h.Z,{className:"size-4"}),"Terminal"]})}),(0,s.jsx)(u,{codes:p,lang:"sql"})]}),(0,s.jsxs)("div",{className:"relative flex flex-col bg-gradient-to-b ring-1 ring-slate-900/5 sm:max-h-none lg:col-span-7 dark:bg-slate-700 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:backdrop-blur",children:[(0,s.jsx)("div",{className:"flex-none border-b border-slate-500/30",children:(0,s.jsxs)("div",{className:"flex h-10 items-center space-x-1.5 px-3",children:[(0,s.jsx)("div",{className:"size-2.5 rounded-full bg-[#EC6A5F]"}),(0,s.jsx)("div",{className:"ml-1.5 size-2.5 rounded-full bg-[#F4BF50]"}),(0,s.jsx)("div",{className:"ml-1.5 size-2.5 rounded-full bg-[#61C454]"}),(0,s.jsxs)("div",{className:"mx-auto flex w-full items-center justify-start rounded-md bg-slate-100 py-1 pl-3 text-xs font-medium leading-5 ring-1 ring-inset ring-slate-900/5 dark:bg-slate-800 dark:text-slate-500",children:[(0,s.jsx)(d,{className:"mr-2 size-3.5 text-slate-300 dark:text-slate-500"}),i.title]})]})}),(0,s.jsx)("div",{className:"h-60 overflow-hidden lg:h-96",children:(0,s.jsx)("img",{src:i.img,className:"size-full object-cover object-left"})})]})]})]})};var f=!0,v=()=>{let e=x.features,{t}=(0,n.$G)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-between",children:[(0,s.jsxs)("div",{className:"relative p-8 sm:pt-12 lg:pt-18",children:[(0,s.jsx)("p",{className:"inline bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-400 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-3xl lg:text-5xl dark:from-indigo-200 dark:via-sky-400 dark:to-indigo-200",children:t(x.title)}),(0,s.jsx)("p",{className:"m-4 text-2xl italic tracking-tight text-slate-600 lg:text-3xl dark:text-slate-400",children:t(x.subTitle)}),(0,s.jsxs)("div",{className:"mt-16 flex justify-center gap-4 font-semibold",children:[(0,s.jsx)(c(),{className:"w-36 rounded-lg bg-blue-600 p-3 text-center  text-white hover:bg-blue-700",href:"/docs/lindb/getting-started/docker",children:t("Getting Started")}),(0,s.jsx)(c(),{className:"w-36 rounded-lg bg-neutral-800 p-3 text-center text-white hover:bg-neutral-900",href:x.github,target:"_blank",children:t("View on GitHub")})]})]}),(0,s.jsx)(b,{items:[{img:"/img/lindb/guide/admin_ui/overview.png",title:"cluster overview"},{img:"/img/lindb/guide/admin_ui/data_search.png",title:"data search"},{img:"/img/lindb/guide/admin_ui/data_search_explain.png",title:"search explain"},{img:"/img/lindb/guide/admin_ui/data_explore.png",title:"data explore"},{img:"/img/lindb/guide/admin_ui/dashboard.png",title:"dashboard"},{img:"/img/lindb/guide/admin_ui/replication_families.png",title:"replication"},{img:"/img/lindb/guide/admin_ui/replication_shards.png",title:"replication"},{img:"/img/lindb/guide/admin_ui/metadata_explore_compare.png",title:"metadata compare"}]}),(0,s.jsx)("div",{className:"beams-0 w-full",children:(0,s.jsxs)("div",{className:"beams-1 relative px-8 lg:pb-20",children:[(0,s.jsx)("div",{className:"py-8 text-center lg:py-12",children:(0,s.jsx)("span",{className:"bg-gradient-to-tl from-blue-600 to-purple-400 bg-clip-text text-4xl font-semibold text-transparent",children:t(x.why)})}),(0,s.jsx)("div",{className:"mx-auto grid max-w-[85rem] gap-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:gap-8 ",children:e.map((e,i)=>(0,s.jsx)("div",{className:"relative flex sm:pe-6",children:(0,s.jsxs)("div",{className:"sm:ms-6 lg:ms-8",children:[(0,s.jsxs)("h1",{className:"mb-3 flex flex-col items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-white",children:[e.icon,t(e.title)]}),(0,s.jsx)("div",{className:"text-slate-600 dark:text-slate-400 ",children:(0,s.jsx)("ul",{className:"before:*:mr-2 before:*:text-indigo-500  before:*:content-['>'] dark:before:*:text-indigo-400",children:e.items.map((e,i)=>(0,s.jsx)("li",{children:t(e)},i))})})]})},i))})]})}),(0,s.jsx)("div",{className:"my-12 grid w-full max-w-8xl  grid-cols-2 gap-6 px-12 lg:grid-cols-4 lg:gap-8 lg:px-16",children:x.resources.map((e,i)=>(0,s.jsxs)("div",{className:"relative flex flex-col items-start sm:pe-6 lg:items-center",children:[(0,s.jsx)("h1",{className:"mb-4 text-2xl font-semibold text-indigo-600 dark:text-indigo-500",children:t(e.title)}),(0,s.jsx)("ul",{children:e.items.map((e,i)=>(0,s.jsx)("li",{className:"prose mb-2 dark:prose-invert",children:(0,s.jsx)(a.G2,{href:e.href,internal:!0,children:t(e.name)})},i))})]},i))})]})})}}}]);