# Node on Nashorn

This is an experiment with running a node app on the JVM.
It's a little incomplete because I'm running into the following error:

```sh
[mike@longshot api]$ yarn
yarn install v1.0.2
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.1.2: The platform "linux" is incompatible with this module.
info "fsevents@1.1.2" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "ajv-keywords@2.1.0" has incorrect peer dependency "ajv@>=5.0.0".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 4.73s.
[mike@longshot api]$ yarn build
yarn build v1.0.2
$ ./node_modules/webpack/bin/webpack.js
Hash: 201340e9668af635461f
Version: webpack 3.6.0
Time: 1230ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  976 kB       0  [emitted]  [big]  main
 [165] ./index.js 406 bytes {0} [built]
 [397] ./node_modules/express/lib 160 bytes {0} [built]
 [403] (webpack)/buildin/module.js 517 bytes {0} [built]
    + 413 hidden modules

WARNING in ./node_modules/express/lib/view.js
81:13-25 Critical dependency: the request of a dependency is an expression
Done in 1.74s.
[mike@longshot api]$ yarn start
yarn start v1.0.2
$ jjs bundle.js
bundle.js:16326 ReferenceError: "global" is not defined
error Command failed with exit code 102.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
[mike@longshot api]$ sed "16326q;d" bundle.js 
module.exports = global.URLSearchParams || URLSearchParams;
```
