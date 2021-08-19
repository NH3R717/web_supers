#!/bin/bash
#exec &>/tmp/wagui_boot_script.log
# Run Fail Safe Command
#set -euxo pipefail

mkdir API
cp docker-compose.yml API
cd API

docker-compose up -d && docker-compose logs -f