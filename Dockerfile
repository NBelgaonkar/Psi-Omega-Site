# Use a Node.js base image
FROM node:16-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Update Browserslist database
RUN npx update-browserslist-db@latest --update-db



# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build


# Stage 2: Serve the React application with Nginx
FROM nginx:alpine

# Copy the build output to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf


#Copy certs
COPY /etc/letsencrypt/live/dekesrpi.org/fullchain.pem /etc/letsencrypt/live/dekesrpi.org/fullchain.pem
COPY /etc/letsencrypt/live/dekesrpi.org/privkey.pem /etc/letsencrypt/live/dekesrpi.org/privkey.pem
COPY /etc/letsencrypt/options-ssl-nginx.conf /etc/letsencrypt/options-ssl-nginx.conf
COPY /etc/letsencrypt/ssl-dhparams.pem /etc/letsencrypt/ssl-dhparams.pem




EXPOSE 80
EXPOSE 443


# Start the application
CMD ["nginx", "-g", "daemon off;"]