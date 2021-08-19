#!/bin/bash

gatsby new Web https://github.com/gatsbyjs/gatsby-starter-hello-world
cd Web

echo "####PWD####"
pwd
echo "####PWD####"

echo '
#############################
## Base project installed ###
#############################
' 

npm i \
gatsby-plugin-image \
gatsby-plugin-react-helmet \
gatsby-plugin-sharp \
gatsby-plugin-sitemap \
gatsby-plugin-webfonts \
gatsby-source-filesystem \
gatsby-source-strapi \
gatsby-transformer-sharp \
\
react-helmet \
react-icons \
react-markdown

echo '
########################
## Plugins installed ###
########################
'

touch gatsby-node.js
touch gatsby-browser.js

echo "####PWD####"
pwd
echo "####PWD####"

# cp -a . .. && cd .. && rm -rf Hold
# echo "cp -a . .. && cd .. && rm -rf Hold"

mkdir src/assets src/components scr/css scr/pages
touch scr/css/main.css

echo "####PWD####"
pwd
echo "####PWD####"

echo '
###############################
## Project Install Complete ###
###############################
'

echo '
############################
## Dont forget to update:
## gatsby-browser.js
## gatsby-config.js
## package-lock.json
## package.json
## README.md
## main.css
## favicon
## license
## ect
############################
'
