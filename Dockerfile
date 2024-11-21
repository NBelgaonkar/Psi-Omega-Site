# Use a multi-stage build
FROM node:16-alpine as build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Build the production version of the app
COPY . .
RUN npm run build

# Use a lightweight web server to serve the built app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the static server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
