# Node on Nashorn

This is an experiment with running a node app on the JVM.

## Dependencies

Java 9 is assumed here because it's needed for ES6 support as well as supplying the `jjs` command.


## Current status:

This experiment is a little incomplete because I'm running into the following error:

```sh
[mike@longshot api]$ yarn build
yarn build v1.0.2
$ ./node_modules/webpack/bin/webpack.js
Hash: 59ffc0861ed733bfdf96
Version: webpack 3.6.0
Time: 261ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.97 kB       0  [emitted]  main
   [0] ./index.js 377 bytes {0} [built]
    + 1 hidden module
Done in 0.74s.
[mike@longshot api]$ yarn start
yarn start v1.0.2
$ jjs --language=es6 -DNODESCHNAPS_PATH=./node_modules/nodeschnaps/lib/ ./nashorn.js
./node_modules/nodeschnaps/loader.js:374 TypeError: JavaFile is not a function
error Command failed with exit code 102.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```
