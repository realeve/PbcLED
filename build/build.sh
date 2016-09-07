#!/bin/bash

basePath=$(cd `dirname $0`; pwd)
cd ${basePath}/../
rm -r gh-pages

#npm run prepublish

npm start
#webpack --progress
#webpack -p --config webpack.production.config.js --progress