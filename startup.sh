#!/bin/bash

# Build and start services
echo "Building and starting services..."
docker-compose up --build -d

# Update Nginx configuration
echo "Refreshing Nginx..."


# Define paths and domain
LOCAL_NGINX_CONF="./nginx.conf"
NGINX_SITES_AVAILABLE="/etc/nginx/sites-available/default"
DOMAIN="dekesrpi.org"
EMAIL="it.dkepsiomega@gmail.com"

# Step 1: Copy the local nginx.conf to /etc/nginx/sites-available as 'default'
if [ -f "$LOCAL_NGINX_CONF" ]; then
    echo "Copying local nginx.conf to $NGINX_SITES_AVAILABLE..."
    sudo cp "$LOCAL_NGINX_CONF" "$NGINX_SITES_AVAILABLE"
    echo "Successfully copied nginx.conf to sites-available as 'default'."
else
    echo "Error: Local nginx.conf not found in the current directory."
    exit 1
fi

# Step 2: Test Nginx configuration
echo "Testing Nginx configuration..."
if sudo nginx -t 2>/dev/null; then
    echo "Configuration is valid. Reloading Nginx..."
    sudo systemctl reload nginx
    echo "Nginx successfully reloaded!"
else
    echo "Configuration test failed. Please fix the errors before reloading."
    sudo nginx -t
    exit 1
fi

# Step 3: Register SSL certificates using Certbot
echo "Registering SSL certificates for $DOMAIN..."
sudo certbot --nginx -d "$DOMAIN" --email "$EMAIL" --agree-tos --no-eff-email

# Check if Certbot succeeded
if [ $? -eq 0 ]; then
    echo "SSL certificates successfully registered and applied!"
else
    echo "Error: Failed to register SSL certificates."
    exit 1
fi
