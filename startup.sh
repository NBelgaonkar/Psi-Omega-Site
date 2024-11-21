#!/bin/bash

# Build and start services
echo "Building and starting services..."
docker-compose up --build -d

# Check for SSL certificates
if [ ! -f "./certbot/conf/live/dekesrpi.org/fullchain.pem" ]; then
  echo "Certificates missing! Running Certbot to generate certificates..."
  
  # Stop Nginx
  echo "Stopping Nginx..."
  docker-compose stop nginx

  # Generate certificates
  echo "Running Certbot..."
  docker run --rm \
    -v $(pwd)/certbot/conf:/etc/letsencrypt \
    -v $(pwd)/certbot/www:/var/www/certbot \
    certbot/certbot certonly --standalone \
    --preferred-challenges http \
    --email it.dkepsiomega@gmail.com \
    --agree-tos \
    -d dekesrpi.org -d www.dekesrpi.org

  # Restart Nginx
  echo "Restarting Nginx..."
  docker-compose up -d nginx
else
  echo "Certificates already exist. Skipping Certbot."
fi

# Check container status
echo "Checking container status..."
docker-compose ps
