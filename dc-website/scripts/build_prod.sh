#!/usr/bin/env bash

ng build --configuration=production --base-href=https://danielcaballero88.github.io/
rm -rf ../docs
cp -r dist/dc-website ../docs
cp ../docs/index.html ../docs/404.html
