# Contributor Guide

## Project Layout

This entire project is implemented by Go, so it follows the common rule of general Go project.
Below is a brief description for project structure

```
.
├─ aggregation    : data aggregation, function and expression calculation
├─ bin            : directory of binary files, name of the binary package is `lind`
├─ broker         : internal implementation and runtime dependencies of Broker 
├─ ci             : some CI tools and protobuf scripts
├─ cmd            : entrance to the entire system, including Broker, Storage and Standalone running-mode
├─ config         : required configurations for each component 
├─ constants      : common constant definitions
├─ coordinator    : the distributed coordinator, including MetaData, State and Task management for Broker, Storage and Master 
├─ kv             : the underling common KV storage 
├─ mock           : mock helper functions used in the project
├─ models         : Model definition for the entire projects
├─ parallel       : Job and Task management for distributed query calculation
├─ pkg            : reusable tools packages 
├─ query          : query implementation for Broker and Storage
├─ replication    : WAL replication
├─ rpc            : RPC for internal communication 
├─ service        : internal general services implementation
├─ sql            : SQL parser
├─ standalone     : runtime dependencies for standalone-mode
├─ series         : Multi-version based on Bitmap and interfaces of series
├─ storage        : internal implementation and runtime dependencies of Storage
├─ tsdb           : storage engine of TimeSeries database
│  ├─ diskdb      : disk database
│  ├─ memdb       : Time Series In-Memory database
│  └─ tblstore    : flushers and readers for metric data files and index files
├─ vendor         : Go vender
└─ web            : front-end project
```
