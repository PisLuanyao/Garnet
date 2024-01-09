"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9029],{4942:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(5893),r=t(1151);const o={id:"configuration",sidebar_label:"Configuration",title:"Garnet Configuration"},s=void 0,a={id:"dev/configuration",title:"Garnet Configuration",description:"Code Overview",source:"@site/docs/dev/configuration.md",sourceDirName:"dev",slug:"/dev/configuration",permalink:"/docs/dev/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/Garnet/tree/main/website/docs/dev/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",sidebar_label:"Configuration",title:"Garnet Configuration"},sidebar:"garnetDocSidebar",previous:{title:"Code Structure",permalink:"/docs/dev/code-structure"},next:{title:"Network Layer",permalink:"/docs/dev/network"}},d={},l=[{value:"Code Overview",id:"code-overview",level:2},{value:"Options Parsing",id:"options-parsing",level:2},{value:"Configuration File Parsing",id:"configuration-file-parsing",level:3},{value:"Supported File Formats",id:"supported-file-formats",level:3},{value:"GarnetConf",id:"garnetconf",level:4},{value:"RedisConf",id:"redisconf",level:4},{value:"Command Line Argument Parsing",id:"command-line-argument-parsing",level:3},{value:"Options Validation",id:"options-validation",level:3},{value:"How to Add a New Setting",id:"how-to-add-a-new-setting",level:2},{value:"How to Add a New Configuration File Format",id:"how-to-add-a-new-configuration-file-format",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"code-overview",children:"Code Overview"}),"\n",(0,i.jsxs)(n.p,{children:["Every configurable Garnet setting has a matching property defined in the ",(0,i.jsx)(n.strong,{children:"Options"})," class (",(0,i.jsx)(n.code,{children:"GarnetServer\\Configuration\\Options.cs"}),"). ",(0,i.jsx)(n.br,{}),"\n","When GarnetServer.exe initializes, it creates a new Options object using the command line variables, the defaults file and a configuration file, if supplied, by calling ",(0,i.jsx)(n.strong,{children:"ServerSettingsManager.TryParseCommandLineArguments()"}),".",(0,i.jsx)(n.br,{}),"\n","It then calls the instance method ",(0,i.jsx)(n.strong,{children:"GetServerOptions()"})," which returns an instance of ",(0,i.jsx)(n.strong,{children:"GarnetServerOptions"}),", that can be then used to create a new instance of ",(0,i.jsx)(n.strong,{children:"GarnetServer"}),"."]}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart LR\n    def[\\Defaults File\\]\n    cmd[\\Command Line Args\\]\n    conf[\\Configuration File\\]\n    mtd1[[ServerSettingsManager.TryParseCommandLineArguments]]\n    opt[\\Options\\]\n    mtd2[[Options.GetServerOptions]]\n    srvopt[\\GarnetServerOptions\\]\n    def --\x3e mtd1\n    cmd --\x3e mtd1\n    conf --\x3e mtd1\n    mtd1 --\x3e opt\n    opt --\x3e mtd2\n    mtd2 --\x3e srvopt"}),"\n",(0,i.jsx)(n.h2,{id:"options-parsing",children:"Options Parsing"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Options"})," object is initialized by calling ",(0,i.jsx)(n.strong,{children:"ServerSettingsManager.TryParseCommandLineArguments()"})," with the set of inputted command line arguments.",(0,i.jsx)(n.br,{}),"\n","The initialization of the object consists of:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Parsing the ",(0,i.jsx)(n.strong,{children:"defaults configuration file"})," into the Options object (defaults to ",(0,i.jsx)(n.code,{children:"defaults.conf"}),", unless otherwise specified by the command line arguments)"]}),"\n",(0,i.jsxs)(n.li,{children:["Parsing the ",(0,i.jsx)(n.strong,{children:"configuration file"})," (if specified by the command line arguments) and populating the initialized object, overriding default settings."]}),"\n",(0,i.jsxs)(n.li,{children:["Parsing the ",(0,i.jsx)(n.strong,{children:"command line variables"})," and populating the object again, overriding and default settings or settings provided by the configuration file."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configuration-file-parsing",children:"Configuration File Parsing"}),"\n",(0,i.jsxs)(n.p,{children:["Parsing of the configuration files is done by calling ",(0,i.jsx)(n.strong,{children:"ServerSettingsManager.TryImportServerOptions()"}),". This method supports reading files from multiple sources (curretly supported: ",(0,i.jsx)(n.strong,{children:"local files"})," & remote files on ",(0,i.jsx)(n.strong,{children:"Azure Storage"}),"), as well as reading multiple file formats (specified by the ",(0,i.jsx)(n.strong,{children:"ConfigFileType"})," enum).\nThis is done by calling the following factory methods:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"StreamProviderFactory.GetStreamProvider()"})," - returns a ",(0,i.jsx)(n.strong,{children:"StreamProviderBase"})," for reading from the appropriate file source"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ConfigProviderFactory.GetConfigProvider()"})," - returns an ",(0,i.jsx)(n.strong,{children:"IConfigProvider"})," for reading the appropriate file format"]}),"\n"]}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart LR\n    getsp[[StreamProviderFactory.GetStreamProvider]]\n    getcp[[ConfigProviderFactory.GetConfigProvider]]\n    spb[\\StreamProviderBase\\]\n    icp[\\IConfigProvider\\]\n    rd[[Read]]\n    imp[[TryImportOptions]]\n    st[\\Stream\\]\n    opt[\\Options\\]\n    getsp --\x3e spb\n    getcp --\x3e icp\n    spb --\x3e rd\n    rd --\x3e st\n    icp --\x3e imp\n    st --\x3e imp\n    imp --\x3e opt"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," When specifying an configuration export file path in the command line provider, the ",(0,i.jsx)(n.strong,{children:"ServerSettingsManager.TryExportServerOptions()"})," will similarly use ",(0,i.jsx)(n.strong,{children:"StreamProviderFactory"})," and ",(0,i.jsx)(n.strong,{children:"ConfigProviderFactory"})," to write the configuration file in the specified format to the specified file source."]}),"\n",(0,i.jsx)(n.h3,{id:"supported-file-formats",children:"Supported File Formats"}),"\n",(0,i.jsxs)(n.p,{children:["Currently we support 2 different configuration file formats (all supported file formats are described by the ",(0,i.jsx)(n.strong,{children:"ConfigFileType"})," enum):"]}),"\n",(0,i.jsx)(n.h4,{id:"garnetconf",children:"GarnetConf"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"GarnetConf"})," configuration file format is the default format for Garnet configuration files.",(0,i.jsx)(n.br,{}),"\n","This format consists of a ",(0,i.jsx)(n.strong,{children:"JSON-serialized"})," Options object.",(0,i.jsx)(n.br,{}),"\n","The ",(0,i.jsx)(n.strong,{children:"GarnetConfigProvider"})," is the implementation of ",(0,i.jsx)(n.strong,{children:"IConfigProvider"})," which allows to serialize and deserialize options from or into an Options object (into or from an instance of ",(0,i.jsx)(n.strong,{children:"StreamProviderBase"})," respectively), using the ",(0,i.jsx)(n.strong,{children:"Newtonsoft.Json"})," serializer for JSON deserialization and the ",(0,i.jsx)(n.strong,{children:"System.Text"})," serializer for JSON serialization."]}),"\n",(0,i.jsx)(n.h4,{id:"redisconf",children:"RedisConf"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"RedisConf"})," configuration file format is the file format used to configure a Redis server (read more ",(0,i.jsx)(n.a,{href:"https://redis.io/docs/management/config/",children:"here"}),").",(0,i.jsx)(n.br,{}),"\n","Each Garnet-supported setting in this format has a matching property in the ",(0,i.jsx)(n.strong,{children:"RedisOptions"})," class (",(0,i.jsx)(n.code,{children:"GarnetServer\\Configuration\\RedisOptions.cs"}),").",(0,i.jsx)(n.br,{}),"\n","Each property is decorated with the ",(0,i.jsx)(n.strong,{children:"RedisOptionAttribute"}),", which is used to specify the key (the Redis keyword), the Garnet property name that matches this property, and optionally - the type of trasformer to use when transforming the Redis property to the Garnet property."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"RedisConfigProvider"})," is the implementation of ",(0,i.jsx)(n.strong,{children:"IConfigProvider"})," which allows to deserialize options into an Options object (from an instance of ",(0,i.jsx)(n.strong,{children:"StreamProviderBase"}),").It uses a custom serializer, ",(0,i.jsx)(n.strong,{children:"RedisConfigSerializer"})," (",(0,i.jsx)(n.code,{children:"GarnetServer\\Configuration\\RedisConfigSerializer.cs"}),") to deserialize and populate the Options object.\nDeserialization may use a custom converter to convert the string value to a Redis type (all Redis types and custom converters can be found in ",(0,i.jsx)(n.code,{children:"GarnetServer\\Configuration\\RedisTypes.cs"})," and ",(0,i.jsx)(n.code,{children:"GarnetServer\\Configuration\\TypeConverters.cs"}),").",(0,i.jsx)(n.br,{}),"\n","Populating the Options object is done by the matching Options property from the ",(0,i.jsx)(n.strong,{children:"RedisOptionAttribute"}),", then either transforming the ",(0,i.jsx)(n.strong,{children:"RedisOptions"})," property to the destination Options property (if a custom transformer is specified in the attribute) or converting the property using a TypeConverter, if such exists. If neither a transformer nor a type converter exists, a simple cast is attempted. If all fails, the serialization will fail."]}),"\n",(0,i.jsx)(n.h3,{id:"command-line-argument-parsing",children:"Command Line Argument Parsing"}),"\n",(0,i.jsxs)(n.p,{children:["Parsing of the command line arguments is done by a 3rd party library named ",(0,i.jsx)(n.a,{href:"https://github.com/commandlineparser/commandline",children:"CommandLineParser"}),". Each Options property is decorated by the ",(0,i.jsx)(n.strong,{children:"OptionAttribute"}),', which specifies its long name and / or short name (e.g. "memory" / "m" respectively) as well as its help text to be displayed when running ',(0,i.jsx)(n.code,{children:"GarnetServer.exe -h"})," or ",(0,i.jsx)(n.code,{children:"GarnetServer.exe --help"}),".",(0,i.jsx)(n.br,{}),"\n","The OptionsAttribute also supports specifying a default value, which is ",(0,i.jsx)(n.strong,{children:"not used"})," as to not create confusion with the default values specified in the defaults configuration file."]}),"\n",(0,i.jsxs)(n.p,{children:["Command line arguments parsing is effectively done twice, we first parse the command line arguments in order to retrieve the defaults configuration file and the configuration file, if specified. We then hand the command line arguments parser an initialization function that populates an Options object as described in the ",(0,i.jsx)(n.a,{href:"#configuration-file-parsing",children:"Configuration File Parsing"})," section. The parser then proceeds to populate the initialized object with settings specified in the command line."]}),"\n",(0,i.jsx)(n.h3,{id:"options-validation",children:"Options Validation"}),"\n",(0,i.jsxs)(n.p,{children:["Once Options parsing is done, the ",(0,i.jsx)(n.strong,{children:"ServerSettingsManager.TryParseCommandLineArguments()"})," then calls the instance method ",(0,i.jsx)(n.strong,{children:"Options.IsValid()"})," to validate the final Options object.",(0,i.jsx)(n.br,{}),"\n","Each Options property may be decorated with a ValidationAttribute (all custom Garnet validation attributes can be found in ",(0,i.jsx)(n.code,{children:"GarnetServer\\Configuration\\OptionsValidators.cs"}),"), which can then be used to check each property value validity.\\\nIf any invalid property values are found, the method will return a null options object, as well as a list of the invalid property names.",(0,i.jsx)(n.br,{}),"\n","All errors returned by the validators will be written to the console."]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-add-a-new-setting",children:"How to Add a New Setting"}),"\n",(0,i.jsx)(n.p,{children:"In order to add a new setting to Garnet, follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add a new property to the Options class (",(0,i.jsx)(n.code,{children:"GarnetServer\\Configuration\\Options.cs"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Decorate your property with the ",(0,i.jsx)(n.strong,{children:"OptionAttribute"}),", and assign it with a long name, short name or both. Also add the appropriate help text to describe the property"]}),"\n",(0,i.jsxs)(n.li,{children:["If your property requires validation, decorate it with a custom ",(0,i.jsx)(n.strong,{children:"ValidationAttribute"})," from ",(0,i.jsx)(n.code,{children:"GarnetServer\\Configuration\\OptionsValidators.cs"})," (add a new one if needed)"]}),"\n",(0,i.jsxs)(n.li,{children:["Add your property's default value in ",(0,i.jsx)(n.code,{children:"defaults.conf"})]}),"\n",(0,i.jsxs)(n.li,{children:["If the new setting is required in the core Garnet code - add a matching property to the ",(0,i.jsx)(n.strong,{children:"GarnetServerOptions"})," class, and add the property setting when constructing the ",(0,i.jsx)(n.strong,{children:"GarnetServerOptions"})," object in ",(0,i.jsx)(n.strong,{children:"Options.GetServerOptions()"})]}),"\n",(0,i.jsxs)(n.li,{children:["If the setting has a matching setting in Redis and you would like to support it in a Redis-formatted configuration file:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the matching property to the ",(0,i.jsx)(n.strong,{children:"RedisOptions"})," class (",(0,i.jsx)(n.code,{children:"GarnetServer\\Configuration\\RedisOptions.cs"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Decorate your property with the ",(0,i.jsx)(n.strong,{children:"RedisOptionAttribute"}),". Specify in the attribute constuctor the key (the Redis keyword), the Garnet property name that matches this property, and optionally - the type of trasformer to use when transforming the Redis property to the Garnet property. Read more about how to properly convert your property in the ",(0,i.jsx)(n.a,{href:"#redisconf",children:"RedisConf"})," section."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Test your code by adding the new setting to a configuration file and make sure that it's being parsed correctly. Alternatively, you can add a check for your setting in ",(0,i.jsx)(n.strong,{children:"GarnetServerConfigTests"})," (",(0,i.jsx)(n.code,{children:"Garnet.test\\GarnetServerConfigTests.cs"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-add-a-new-configuration-file-format",children:"How to Add a New Configuration File Format"}),"\n",(0,i.jsx)(n.p,{children:"In order to add a new configuration file formet to Garnet, follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add a new value to the ",(0,i.jsx)(n.strong,{children:"ConfigFileType"})," enum that matches the new file type"]}),"\n",(0,i.jsxs)(n.li,{children:["Implement a new instance of ",(0,i.jsx)(n.strong,{children:"IConfigProvider"})," for importing / exporting options from or to the new file format"]}),"\n",(0,i.jsxs)(n.li,{children:["Add a new case to the ",(0,i.jsx)(n.strong,{children:"ConfigProviderFactory.GetConfigProvider()"})," switch clause, and return a new instance of your ",(0,i.jsx)(n.strong,{children:"IConfigProvider"})," implementation"]}),"\n",(0,i.jsx)(n.li,{children:"If needed, add a custom serializer to serialize or deserialize the new file format"}),"\n",(0,i.jsxs)(n.li,{children:["Add a new test case to ",(0,i.jsx)(n.strong,{children:"GarnetServerConfigTests"})," (",(0,i.jsx)(n.code,{children:"Garnet.test\\GarnetServerConfigTests.cs"}),") to check that your code imports / exports options correctly"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);