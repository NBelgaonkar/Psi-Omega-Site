#!/bin/bash

# build containers
echo "Building and starting services..."
docker-compose up --build -d

# check status
echo "Checking container status..."
docker-compose ps

