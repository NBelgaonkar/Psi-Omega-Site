#!/bin/bash

# Stop and remove any existing containers
echo "Cleaning up existing containers..."
docker-compose down

# Build and start services
echo "Building and starting services..."
docker-compose up --build -d

# Generate SSL certificate
echo "Generating SSL certificate..."
docker run --rm -v /etc/letsencrypt:/etc/letsencrypt \
  -v /var/lib/letsencrypt:/var/lib/letsencrypt \
  certbot/certbot certonly --webroot \
  --webroot-path=/var/www/certbot \
  --agree-tos --no-eff-email --email it.dkepsiomega@gmail.com \
  -d dekesrpi.org -d www.dekesrpi.org

# Reload nginx with the new certificate
echo "Reloading nginx..."
docker-compose exec web nginx -s reload
