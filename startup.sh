#!/bin/bash

# Build and start services
echo "Building and starting services..."
docker-compose up --build -d

# Check container status
echo "Checking container status..."
docker-compose ps