#!/bin/bash

# Export .env variables
# psql container uses .env admin pass variable
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Replace $ADMIN_PASSWORD in init.sql only if the placeholder exists
if grep -q '\$ADMIN_PASSWORD' init.sql; then
    echo "Replacing \$ADMIN_PASSWORD in init.sql with the actual password..."
    sed -i "s/\$ADMIN_PASSWORD/$ADMIN_PASSWORD/g" init.sql
else
    echo "init.sql already updated with the actual password."
fi


# Build and start services
echo "Building and starting services..."
docker-compose up --build -d

# Update Nginx configuration
echo "Refreshing Nginx..."


# Define paths and domain
LOCAL_NGINX_CONF="./nginx.conf"
LOCAL_NGINX_AVAILABLE_CONF="./sites-available.conf"

NGINX_SITES_AVAILABLE="/etc/nginx/sites-available/dekesrpi.org"
NGINX_CONF_DIR="/etc/nginx/nginx.conf"
DOMAIN="dekesrpi.org"
EMAIL="it.dkepsiomega@gmail.com"

# Step 1: Copy the local nginx.conf to /etc/nginx/sites-available as 'dekesrpi.org'
if [ -f "$LOCAL_NGINX_CONF" ]; then
    echo "Copying local sites-available.conf to "$NGINX_SITES_AVAILABLE"..."
    sudo cp "$LOCAL_NGINX_AVAILABLE_CONF" "$NGINX_SITES_AVAILABLE"
    echo "Copying local nginx.conf to "$LOCAL_NGINX_CONF"..."
    sudo cp "$LOCAL_NGINX_CONF" "$LOCAL_NGINX_CONF"
    echo "copies done."
    echo "creating symbolic link..."
    sudo ln -s "$NGINX_SITES_AVAILABLE" "/etc/nginx/sites-enabled/dekesrpi.org"
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
sudo certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --email "$EMAIL" --agree-tos --no-eff-email --non-interactive


# Check if Certbot succeeded
if [ $? -eq 0 ]; then
    echo "SSL certificates successfully registered and applied!"
else
    echo "Error: Failed to register SSL certificates."
    exit 1
fi

# Step 4: Check if the Certbot cron job file exists
CRON_FILE="/etc/cron.d/certbot"

# Check if the Certbot cron job file exists
if [ -f "$CRON_FILE" ]; then
    echo "Certbot cron job file exists: $CRON_FILE"
else
    echo "Certbot cron job file not found: $CRON_FILE"
fi
