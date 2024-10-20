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

EXPOSE 80
EXPOSE 443
EXPOSE 3000

# Start the application
CMD ["nginx", "-g", "daemon off;"]