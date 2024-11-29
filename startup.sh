#!/bin/bash

# Build and start services
echo "Building and starting services..."
docker-compose up --build -d

# Wait to ensure services are up
sleep 120

# Check volumes and certificates
echo "Checking Certbot volumes..."
if [ ! -d "./data/certbot/www" ]; then
  echo "Certbot volume for www not found. Creating it..."
  mkdir -p ./data/certbot/www
fi

if [ ! -d "./data/certbot/conf" ]; then
  echo "Certbot volume for conf not found. Creating it..."
  mkdir -p ./data/certbot/conf
fi

echo "Generating SSL certificates..."
docker run --rm -v "$(pwd)/data/certbot/www:/var/www/certbot" \
  -v "$(pwd)/data/certbot/conf:/etc/letsencrypt" \
  certbot/certbot certonly --webroot \
  --webroot-path=/var/www/certbot \
  -d dekesrpi.org -d www.dekesrpi.org

# Check container status
echo "Checking container status..."
docker-compose ps
