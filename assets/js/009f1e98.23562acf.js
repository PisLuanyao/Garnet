"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3436],{4069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var i=r(5893),n=r(1151);const d={id:"configuration",sidebar_label:"Configuration",title:"Garnet Configuration"},s=void 0,o={id:"getting-started/configuration",title:"Garnet Configuration",description:"How to Configure Garnet",source:"@site/docs/getting-started/configuration.md",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/docs/getting-started/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/Garnet/tree/main/website/docs/getting-started/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",sidebar_label:"Configuration",title:"Garnet Configuration"},sidebar:"garnetDocSidebar",previous:{title:"Build",permalink:"/docs/getting-started"},next:{title:"Security",permalink:"/docs/security"}},c={},l=[{value:"How to Configure Garnet",id:"how-to-configure-garnet",level:2},{value:"garnet.conf",id:"garnetconf",level:2},{value:"redis.conf",id:"redisconf",level:2},{value:"Command line arguments",id:"command-line-arguments",level:2},{value:"Configurable Settings",id:"configurable-settings",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"how-to-configure-garnet",children:"How to Configure Garnet"}),"\n",(0,i.jsxs)(t.p,{children:["The Garnet server (GarnetServer.exe) can be configured using a configuration file (e.g. ",(0,i.jsx)(t.code,{children:"garnet.conf"})," or ",(0,i.jsx)(t.code,{children:"redis.conf"}),"), while command line arguments can be used to override any settings specified in the file. /\nAny settings not specified in either configuration file or command line arguments are set to default valued specified in the ",(0,i.jsx)(t.code,{children:"defaults.conf"})," file (path to this file can be overridden via the command line arguments)."]}),"\n",(0,i.jsx)(t.p,{children:"Garnet currently supports two configuration file formats:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.a,{href:"#garnetconf",children:(0,i.jsx)(t.code,{children:"garnet.conf"})})," file format (default) - a JSON-formatted collection of settings"]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.a,{href:"#redisconf",children:(0,i.jsx)(t.code,{children:"redis.conf"})})," file format - a collection of settings in the Redis configuration file format:","\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"keyword argument1 argument2 argument3 ... argumentN\n"})}),"\n","See Redis ",(0,i.jsx)(t.a,{href:"https://redis.io/docs/management/config/",children:"docs"})," for reference./\n",(0,i.jsx)(t.strong,{children:"Important:"})," Not all redis.conf keywords are supported in Garnet. In order to have full configuration settings coverage, use the ",(0,i.jsx)(t.code,{children:"garnet.conf"})," format."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Specifying a configuration file path (and a default file path) can be done via the command line parameters./"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["For ",(0,i.jsx)(t.code,{children:"garnet.conf"}),":","\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"GarnetServer.exe --config-import-path <file-path>\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["For ",(0,i.jsx)(t.code,{children:"redis.conf"}),":","\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"GarnetServer.exe --config-import-path <file-path> --config-import-format RedisConf\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," To change the path (and/or format) of the defaults configuration file, use the ",(0,i.jsx)(t.code,{children:"config-default-import-path"})," and ",(0,i.jsx)(t.code,{children:"config-default-import-format"})," keywords respectively."]}),"\n",(0,i.jsx)(t.h2,{id:"garnetconf",children:"garnet.conf"}),"\n",(0,i.jsxs)(t.p,{children:["The default configuration file format for Garnet, which supports the full-range of configurable Garnet settings./\n",(0,i.jsx)(t.code,{children:"garnet.conf"})," is a JSON-formatted file containing a collection of configuration settings. For all the available settings, see the ",(0,i.jsx)(t.code,{children:"defaults.conf"})," file or refer to the complete Garnet settings ",(0,i.jsx)(t.a,{href:"#configurable-settings",children:"list"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"redisconf",children:"redis.conf"}),"\n",(0,i.jsxs)(t.p,{children:["Garnet supports the ",(0,i.jsx)(t.code,{children:"redis.conf"})," file format as a configuration file. Note that not all ",(0,i.jsx)(t.code,{children:"redis.conf"})," keywords are supported. Please see the following list of supported ",(0,i.jsx)(t.code,{children:"redis.conf"})," keywords:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.th,{children:[(0,i.jsx)(t.code,{children:"redis.conf"})," keyword"]}),(0,i.jsxs)(t.th,{children:[(0,i.jsx)(t.code,{children:"garnet.conf"})," keyword"]}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"bind"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"bind"})}),(0,i.jsx)(t.td,{children:"Only first address used"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"port"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"port"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"maxmemory"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"memory"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"logfile"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"file-logger"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"loglevel"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"logger-level"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"dir"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"checkpointdir"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"requirepass"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"password"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"aclfile"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"acl-file"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"cluster-enabled"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"cluster"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"cluster-node-timeout"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"cluster-timeout"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"tls-port"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"tls"})}),(0,i.jsx)(t.td,{children:"Value used to indicate if TLS should be used, port number is otherwise ignored"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"tls-cert-file"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"cert-file-name"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"tls-key-file"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"cert-password"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"tls-auth-clients"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"client-certificate-required"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"latency-tracking"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"latency-monitor"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"io-threads"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"numthreads"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"repl-diskless-sync-delay"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"replica-sync-delay"})}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"command-line-arguments",children:"Command line arguments"}),"\n",(0,i.jsxs)(t.p,{children:["Any setting in Garnet can be also configured by specifying a command line argument. /\nIf the setting is also specified in the configuration file, it will be overridden by the value specified in the command line. /\nFor all available command line settings, run ",(0,i.jsx)(t.code,{children:"GarnetServer.exe -h"})," or ",(0,i.jsx)(t.code,{children:"GarnetServer.exe -help"}),", or refer to the complete Garnet settings ",(0,i.jsx)(t.a,{href:"#configurable-settings",children:"list"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"configurable-settings",children:"Configurable Settings"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.th,{children:[(0,i.jsx)(t.code,{children:"garnet.conf"})," keyword"]}),(0,i.jsx)(t.th,{children:"Command line keyword(s)"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Valid Values"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Port"}),(0,i.jsx)(t.td,{children:"--port"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Integer between 0 and 65535"}),(0,i.jsx)(t.td,{children:"Port to run server on"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Address"}),(0,i.jsx)(t.td,{children:"--bind"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"IP Address in v4/v6 format"}),(0,i.jsx)(t.td,{children:"IP address to bind server to (default: any)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MemorySize"}),(0,i.jsx)(t.td,{children:"-m / --memory"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsxs)(t.td,{children:["Memory size",(0,i.jsx)(t.sup,{children:(0,i.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),(0,i.jsx)(t.td,{children:"Total log memory used in bytes (rounds down to power of 2)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PageSize"}),(0,i.jsx)(t.td,{children:"-p / --page"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Memory size"}),(0,i.jsx)(t.td,{children:"Size of each page in bytes (rounds down to power of 2)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SegmentSize"}),(0,i.jsx)(t.td,{children:"-s / --segment"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Memory size"}),(0,i.jsx)(t.td,{children:"Size of each log segment in bytes on disk (rounds down to power of 2)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IndexSize"}),(0,i.jsx)(t.td,{children:"-i / --index"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Memory size"}),(0,i.jsx)(t.td,{children:"Size of hash index in bytes (rounds down to power of 2)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MutablePercent"}),(0,i.jsx)(t.td,{children:"--mutable-percent"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Integer between 0 and 100"}),(0,i.jsx)(t.td,{children:"Percentage of log memory that is kept mutable"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ObjectStoreMemorySize"}),(0,i.jsx)(t.td,{children:"--obj-memory"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Memory size"}),(0,i.jsx)(t.td,{children:"Total object store log memory used in bytes (rounds down to power of 2)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ObjectStorePageSize"}),(0,i.jsx)(t.td,{children:"--obj-page"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Memory size"}),(0,i.jsx)(t.td,{children:"Size of each object store page in bytes (rounds down to power of 2)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ObjectStoreSegmentSize"}),(0,i.jsx)(t.td,{children:"--obj-segment"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Memory size"}),(0,i.jsx)(t.td,{children:"Size of each object store log segment in bytes on disk (rounds down to power of 2)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ObjectStoreIndexSize"}),(0,i.jsx)(t.td,{children:"--obj-index"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Memory size"}),(0,i.jsx)(t.td,{children:"Size of object store hash index in bytes (rounds down to power of 2)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ObjectStoreMutablePercent"}),(0,i.jsx)(t.td,{children:"--obj-mutable-percent"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Integer between 0 and 100"}),(0,i.jsx)(t.td,{children:"Percentage of object store log memory that is kept mutable"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"EnableStorageTier"}),(0,i.jsx)(t.td,{children:"--storage-tier"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Enable tiering of records (hybrid log) to storage, to support a larger-than-memory store. Use --logdir to specify storage directory."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CopyReadsToTail"}),(0,i.jsx)(t.td,{children:"--copy-reads-to-tail"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"When records are read from the main store's in-memory immutable region or storage device, copy them to the tail of the log."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ObjectStoreCopyReadsToTail"}),(0,i.jsx)(t.td,{children:"--obj-copy-reads-to-tail"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"When records are read from the object store's in-memory immutable region or storage device, copy them to the tail of the log."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LogDir"}),(0,i.jsx)(t.td,{children:"-l / --logdir"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Storage directory for tiered records (hybrid log), if storage tiering (--storage) is enabled. Uses current directory if unspecified."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CheckpointDir"}),(0,i.jsx)(t.td,{children:"-c / --checkpointdir"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Storage directory for checkpoints. Uses logdir if unspecified."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Recover"}),(0,i.jsx)(t.td,{children:"-r / --recover"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Recover from latest checkpoint and log, if present."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DisablePubSub"}),(0,i.jsx)(t.td,{children:"--no-pubsub"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Disable pub/sub feature on server."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"EnableIncrementalSnapshots"}),(0,i.jsx)(t.td,{children:"--incsnap"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Enable incremental snapshots."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PubSubPageSize"}),(0,i.jsx)(t.td,{children:"--pubsub-pagesize"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Memory size"}),(0,i.jsx)(t.td,{children:"Page size of log used for pub/sub (rounds down to power of 2)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DisableObjects"}),(0,i.jsx)(t.td,{children:"--no-obj"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Disable support for data structure objects."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"EnableCluster"}),(0,i.jsx)(t.td,{children:"--cluster"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Enable cluster."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CleanClusterConfig"}),(0,i.jsx)(t.td,{children:"--clean-cluster-config"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Start with clean cluster config."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AuthenticationMode"}),(0,i.jsx)(t.td,{children:"--auth"}),(0,i.jsx)(t.td,{children:"GarnetAuthenticationMode"}),(0,i.jsx)(t.td,{children:"NoAuth, Password, Aad or ACL"}),(0,i.jsx)(t.td,{children:"Authentication mode of Garnet. This impacts how AUTH command is processed and how clients are authenticated against Garnet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Password"}),(0,i.jsx)(t.td,{children:"--password"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Authentication string for password authentication."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AclFile"}),(0,i.jsx)(t.td,{children:"--acl-file"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"External ACL user file."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AadAuthority"}),(0,i.jsx)(t.td,{children:"--aad-authority"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"The authority of AAD authentication."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AadAudiences"}),(0,i.jsx)(t.td,{children:"--aad-audiences"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"The audiences of AAD token for AAD authentication. Should be a comma separated string."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AadIssuers"}),(0,i.jsx)(t.td,{children:"--aad-issuers"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"The issuers of AAD token for AAD authentication. Should be a comma separated string."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AuthorizedAadApplicationIds"}),(0,i.jsx)(t.td,{children:"--aad-authorized-app-ids"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"The authorized client app Ids for AAD authentication. Should be a comma separated string."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"EnableAOF"}),(0,i.jsx)(t.td,{children:"--aof"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Enable write ahead logging (append-only file)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AofMemorySize"}),(0,i.jsx)(t.td,{children:"--aof-memory"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Memory size"}),(0,i.jsx)(t.td,{children:"Total AOF memory buffer used in bytes (rounds down to power of 2) - spills to disk after this limit"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CommitFrequencyMs"}),(0,i.jsx)(t.td,{children:"--aof-commit-freq"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer or -1"}),(0,i.jsx)(t.td,{children:"Write ahead logging (append-only file) commit issue frequency in milliseconds. 0 = issue an immediate commit per operation, -1 = manually issue commits using COMMITAOF command"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"WaitForCommit"}),(0,i.jsx)(t.td,{children:"--aof-commit-wait"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Wait for AOF to flush the commit before returning results to client. Warning: will greatly increase operation latency."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AofSizeLimit"}),(0,i.jsx)(t.td,{children:"--aof-size-limit"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Memory size"}),(0,i.jsx)(t.td,{children:"Maximum size of AOF (rounds down to power of 2) after which unsafe truncation will be applied. Left empty AOF will grow without bound unless a checkpoint is taken"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CompactionFrequencySecs"}),(0,i.jsx)(t.td,{children:"--compaction-freq"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer"}),(0,i.jsx)(t.td,{children:"Background hybrid log compaction frequency in seconds. 0 = disabled (compaction performed before checkpointing instead)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CompactionType"}),(0,i.jsx)(t.td,{children:"--compaction-type"}),(0,i.jsx)(t.td,{children:"LogCompactionType"}),(0,i.jsx)(t.td,{children:"None, Shift, ShiftForced, Scan or Lookup"}),(0,i.jsx)(t.td,{children:"Hybrid log compaction type. Shift = shift begin address without compaction (data loss), Scan = scan old pages and move live records to tail (no data loss - take a checkpoint to actually delete the older data files from disk)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CompactionMaxSegments"}),(0,i.jsx)(t.td,{children:"--compaction-max-segments"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer"}),(0,i.jsx)(t.td,{children:"Number of log segments created on disk before compaction triggers."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ObjectStoreCompactionMaxSegments"}),(0,i.jsx)(t.td,{children:"--obj-compaction-max-segments"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer"}),(0,i.jsx)(t.td,{children:"Number of object store log segments created on disk before compaction triggers."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GossipSamplePercent"}),(0,i.jsx)(t.td,{children:"--gossip-sp"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Integer between 0 and 100"}),(0,i.jsx)(t.td,{children:"Percent of cluster nodes to gossip with at each gossip iteration."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GossipDelay"}),(0,i.jsx)(t.td,{children:"--gossip-delay"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer"}),(0,i.jsx)(t.td,{children:"Cluster mode gossip protocol per node sleep (in seconds) delay to send updated config."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ClusterTimeout"}),(0,i.jsx)(t.td,{children:"--cluster-timeout"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer"}),(0,i.jsx)(t.td,{children:"Cluster node timeout is the amount of seconds a node must be unreachable."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"EnableTLS"}),(0,i.jsx)(t.td,{children:"--tls"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Enable TLS."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CertFileName"}),(0,i.jsx)(t.td,{children:"--cert-file-name"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"TLS certificate file name."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CertPassword"}),(0,i.jsx)(t.td,{children:"--cert-password"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"TLS certificate password."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CertSubjectName"}),(0,i.jsx)(t.td,{children:"--cert-subject-name"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"TLS certificate subject name."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"EnableCertificateRefresh"}),(0,i.jsx)(t.td,{children:"--cert-refresh"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Whether refresh TLS certificate."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CertificateRefreshFrequency"}),(0,i.jsx)(t.td,{children:"--cert-refresh-freq"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer"}),(0,i.jsx)(t.td,{children:"TLS certificate refresh frequency in seconds."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ClientCertificateRequired"}),(0,i.jsx)(t.td,{children:"--client-certificate-required"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Whether TLS client certificate required."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CheckCertificateRevocation"}),(0,i.jsx)(t.td,{children:"--check-certificate-revocation"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Whether TLS checks certificate revocation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LatencyMonitor"}),(0,i.jsx)(t.td,{children:"--latency-monitor"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Track latency of various events."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MetricsSamplingFrequency"}),(0,i.jsx)(t.td,{children:"--metrics-sampling-freq"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer"}),(0,i.jsx)(t.td,{children:"Metrics sampling frequency in seconds. Value of 0 disables metrics monitor task."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"QuietMode"}),(0,i.jsx)(t.td,{children:"-q"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Enabling quiet mode does not print server version and text art."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LogLevel"}),(0,i.jsx)(t.td,{children:"--logger-level"}),(0,i.jsx)(t.td,{children:"LogLevel"}),(0,i.jsx)(t.td,{children:"Trace, Debug, Information, Warning, Error, Critical or None"}),(0,i.jsx)(t.td,{children:"Logging level"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DisableConsoleLogger"}),(0,i.jsx)(t.td,{children:"--disable-console-logger"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Disable console logger."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FileLogger"}),(0,i.jsx)(t.td,{children:"--file-logger"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Enable file logger and write to the specified path."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ThreadPoolNumThreads"}),(0,i.jsx)(t.td,{children:"--numthreads"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer"}),(0,i.jsx)(t.td,{children:"Minimum and maximum worker and completion port threads in thread pool, 0 uses the system default."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"UseAzureStorage"}),(0,i.jsx)(t.td,{children:"--use-azure-storage"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Use Azure Page Blobs for storage instead of local storage."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AzureStorageConnectionString"}),(0,i.jsx)(t.td,{children:"--storage-string"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"The connection string to use when establishing connection to Azure Blobs Storage."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CheckpointThrottleFlushDelayMs"}),(0,i.jsx)(t.td,{children:"--checkpoint-throttle-delay"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer or -1"}),(0,i.jsx)(t.td,{children:"Whether and by how much should we throttle the disk IO for checkpoints: -1 - disable throttling; >= 0 - run checkpoint flush in separate task, sleep for specified time after each WriteAsync"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"EnableFastCommit"}),(0,i.jsx)(t.td,{children:"--fast-commit"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Use FastCommit when writing AOF."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FastCommitThrottleFreq"}),(0,i.jsx)(t.td,{children:"--fast-commit-throttle"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer"}),(0,i.jsx)(t.td,{children:"Throttle FastCommit to write metadata once every K commits."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"NetworkSendThrottleMax"}),(0,i.jsx)(t.td,{children:"--network-send-throttle"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer"}),(0,i.jsx)(t.td,{children:"Throttle the maximum outstanding network sends per session."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"EnableScatterGatherMGet"}),(0,i.jsx)(t.td,{children:"--sg-mget"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Whether we use scatter gather IO for MGET operations - useful to saturate disk random read IO."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ReplicaSyncDelayMs"}),(0,i.jsx)(t.td,{children:"--replica-sync-delay"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer"}),(0,i.jsx)(t.td,{children:"Whether and by how much (milliseconds) should we throttle the replica sync: 0 - disable throttling"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MainMemoryReplication"}),(0,i.jsx)(t.td,{children:"--main-memory-replication"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Use main-memory replication model."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OnDemandCheckpoint"}),(0,i.jsx)(t.td,{children:"--on-demand-checkpoint"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Used with main-memory replication model. Take on demand checkpoint to avoid missing data when attaching"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"UseAofNullDevice"}),(0,i.jsx)(t.td,{children:"--aof-null-device"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"With main-memory replication, use null device for AOF. Ensures no disk IO, but can cause data loss during replication."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ConfigImportPath"}),(0,i.jsx)(t.td,{children:"--config-import-path"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Import (load) configuration options from the provided path"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ConfigImportFormat"}),(0,i.jsx)(t.td,{children:"--config-import-format"}),(0,i.jsx)(t.td,{children:"ConfigFileType"}),(0,i.jsx)(t.td,{children:"GarnetConf or RedisConf"}),(0,i.jsx)(t.td,{children:"Format of configuration options in path specified by config-import-path"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ConfigDefaultImportFormat"}),(0,i.jsx)(t.td,{children:"--config-default-import-format"}),(0,i.jsx)(t.td,{children:"ConfigFileType"}),(0,i.jsx)(t.td,{children:"GarnetConf or RedisConf"}),(0,i.jsx)(t.td,{children:"Format of default configuration options in path specified by config-default-import-path"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ConfigExportFormat"}),(0,i.jsx)(t.td,{children:"--config-export-format"}),(0,i.jsx)(t.td,{children:"ConfigFileType"}),(0,i.jsx)(t.td,{children:"GarnetConf or RedisConf"}),(0,i.jsx)(t.td,{children:"Format to export configuration options to path specified by config-export-path"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ConfigDefaultImportPath"}),(0,i.jsx)(t.td,{children:"--config-default-import-path"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Import (load) default configuration options from the provided path"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"UseAzureStorageForConfigImport"}),(0,i.jsx)(t.td,{children:"--use-azure-storage-for-config-import"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Use Azure storage to import config file"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ConfigExportPath"}),(0,i.jsx)(t.td,{children:"--config-export-path"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Export (save) current configuration options to the provided path"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"UseAzureStorageForConfigExport"}),(0,i.jsx)(t.td,{children:"--use-azure-storage-for-config-export"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Use Azure storage to export config file"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"UseAzureStorageForDefaultConfigImport"}),(0,i.jsx)(t.td,{children:"--use-azure-storage-for-default-config-import"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Use Azure storage to import default config file"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"UseNativeDeviceLinux"}),(0,i.jsx)(t.td,{children:"--use-native-device-linux"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Use native device on Linux for local storage"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RevivBinRecordSizes"}),(0,i.jsx)(t.td,{children:"--reviv-bin-record-sizes"}),(0,i.jsx)(t.td,{children:"int[]"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"#,#,...,#: For the main store, the sizes of records in each revivification bin, in order of increasing size.           Supersedes the default --enable-reviv; cannot be used with --reviv-in-chain-only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RevivBinRecordCounts"}),(0,i.jsx)(t.td,{children:"--reviv-bin-record-counts"}),(0,i.jsx)(t.td,{children:"int[]"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"#,#,...,#: For the main store, the number of records in each bin:    Default (not specified): If reviv-bin-record-sizes is specified, each bin is 256 records    # (one value): If reviv-bin-record-sizes is specified, then all bins have this number of records, else error    #,#,...,# (multiple values): If reviv-bin-record-sizes is specified, then it must be the same size as that array, else error                                 Supersedes the default --enable-reviv; cannot be used with --reviv-in-chain-only"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RevivifiableFraction"}),(0,i.jsx)(t.td,{children:"--reviv-fraction"}),(0,i.jsx)(t.td,{children:"double"}),(0,i.jsx)(t.td,{children:"Double between 0 and 1"}),(0,i.jsx)(t.td,{children:"#: Fraction of mutable in-memory log space, from the highest log address down to the read-only region, that is eligible for revivification.        Applies to both main and object store."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"EnableRevivification"}),(0,i.jsx)(t.td,{children:"--reviv"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"A shortcut to specify revivification with default power-of-2-sized bins.    This default can be overridden by --reviv-in-chain-only or by the combination of reviv-bin-record-sizes and reviv-bin-record-counts."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RevivNumberOfBinsToSearch"}),(0,i.jsx)(t.td,{children:"--reviv-search-next-higher-bins"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer"}),(0,i.jsx)(t.td,{children:"Search this number of next-higher bins if the search cannot be satisfied in the best-fitting bin.    Requires --enable-reviv or the combination of reviv-bin-record-sizes and reviv-bin-record-counts"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RevivBinBestFitScanLimit"}),(0,i.jsx)(t.td,{children:"--reviv-bin-best-fit-scan-limit"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer"}),(0,i.jsx)(t.td,{children:"Number of records to scan for best fit after finding first fit.    Requires --enable-reviv or the combination of reviv-bin-record-sizes and reviv-bin-record-counts    0: Use first fit    #: Limit scan to this many records after first fit, up to the record count of the bin"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RevivInChainOnly"}),(0,i.jsx)(t.td,{children:"--reviv-in-chain-only"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Revivify tombstoned records in tag chains only (do not use free list).    Cannot be used with reviv-bin-record-sizes or reviv-bin-record-counts. Propagates to object store by default."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RevivObjBinRecordCount"}),(0,i.jsx)(t.td,{children:"--reviv-obj-bin-record-count"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Non-negative Integer"}),(0,i.jsx)(t.td,{children:"Number of records in the single free record bin for the object store. The Object store has only a single bin, unlike the main store.        Ignored unless the main store is using the free record list."})]})]})]}),"\n",(0,i.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(t.p,{children:["A string representing a memory size. Can either be a number of bytes, or follow this pattern: 1k, 1kb, 5M, 5Mb, 10g, 10GB etc. ",(0,i.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var i=r(7294);const n={},d=i.createContext(n);function s(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);