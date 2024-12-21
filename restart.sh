#!/bin/bash

# Kill all running containers
docker kill $(docker ps -q)

# Remove all containers except PostgreSQL
docker ps -a --format "{{.ID}} {{.Names}}" | grep -v "psi-omega-site_psql_1" | awk '{print $1}' | xargs -r docker rm

# Remove all unused images, containers, and volumes except PostgreSQL volumes
docker system prune -a --volumes -f --filter "label!=postgres"

# call startup.sh
sudo sh ./startup.sh
