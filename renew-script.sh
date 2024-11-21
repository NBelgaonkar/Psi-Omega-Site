#!/bin/bash

echo "Stopping Nginx..."
docker-compose stop nginx

echo "Renewing certificates..."
docker run --rm \
  -v $(pwd)/certbot/conf:/etc/letsencrypt \
  -v $(pwd)/certbot/www:/var/www/certbot \
  certbot/certbot renew --standalone

echo "Restarting Nginx..."
docker-compose up -d nginx
