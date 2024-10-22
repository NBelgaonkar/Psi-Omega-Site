# Stage 1: Build the React application
FROM node:16-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the React application using Node.js
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy only the build output from the previous stage
COPY --from=build /app/build /app/build

# Copy package.json and package-lock.json for the server setup
COPY package*.json ./

# Install server dependencies
RUN npm install

# Copy the rest of the application code (if needed for backend)
COPY . .

# Expose the port your application runs on
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
