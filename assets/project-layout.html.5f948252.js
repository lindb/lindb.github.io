import{_ as e,b as n}from"./app.1245c310.js";const i={},r=n(`<h1 id="project-layout" tabindex="-1"><a class="header-anchor" href="#project-layout" aria-hidden="true">#</a> Project Layout</h1><p>This entire project is implemented by Go, so it follows the common rule of general Go project. Below is a brief description for project structure</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500 aggregation    : data aggregation, function and expression calculation
\u251C\u2500 bin            : directory of binary files, name of the binary package is \`lind\`
\u251C\u2500 broker         : internal implementation and runtime dependencies of Broker 
\u251C\u2500 ci             : some CI tools and protobuf scripts
\u251C\u2500 cmd            : entrance to the entire system, including Broker, Storage and Standalone running-mode
\u251C\u2500 config         : required configurations for each component 
\u251C\u2500 constants      : common constant definitions
\u251C\u2500 coordinator    : the distributed coordinator, including MetaData, State and Task management for Broker, Storage and Master 
\u251C\u2500 kv             : the underling common KV storage 
\u251C\u2500 mock           : mock helper functions used in the project
\u251C\u2500 models         : Model definition for the entire projects
\u251C\u2500 parallel       : Job and Task management for distributed query calculation
\u251C\u2500 pkg            : reusable tools packages 
\u251C\u2500 query          : query implementation for Broker and Storage
\u251C\u2500 replication    : WAL replication
\u251C\u2500 rpc            : RPC for internal communication 
\u251C\u2500 service        : internal general services implementation
\u251C\u2500 sql            : SQL parser
\u251C\u2500 standalone     : runtime dependencies for standalone-mode
\u251C\u2500 series         : Multi-version based on Bitmap and interfaces of series
\u251C\u2500 storage        : internal implementation and runtime dependencies of Storage
\u251C\u2500 tsdb           : storage engine of TimeSeries database
\u2502  \u251C\u2500 diskdb      : disk database
\u2502  \u251C\u2500 memdb       : Time Series In-Memory database
\u2502  \u2514\u2500 tblstore    : flushers and readers for metric data files and index files
\u251C\u2500 vendor         : Go vender
\u2514\u2500 web            : front-end project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function a(s,d){return r}var o=e(i,[["render",a],["__file","project-layout.html.vue"]]);export{o as default};
