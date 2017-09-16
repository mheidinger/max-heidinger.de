#!/bin/bash

cd "${0%/*}"

if [ "$(docker ps -q -f name=max-heidinger.de_container)" ]; then
  docker stop "max-heidinger.de_container"
  docker rm "max-heidinger.de_container"
fi

docker build -t max-heidinger.de .

docker run -p 80:80 -p 443:443 --restart unless-stopped --name "max-heidinger.de_container" -d max-heidinger.de
