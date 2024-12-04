#!/bin/bash

# kill containers
docker kill $(docker ps -a -q)

# remove containers
docker rm $(docker ps -a -q)

# remove storage 
docker system prune -a --volumes

# call startup.sh
./startup.sh
