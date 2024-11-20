# Stage 1: Build the React application
FROM node:16-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (production only to reduce size)
RUN npm install --only=production

# Copy the application code, excluding unnecessary files via .dockerignore
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the React application
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy only the build output from Stage 1
COPY --from=build /app/build /app/build

# Copy production dependencies only
COPY package*.json ./
RUN npm install --only=production

# Expose the port
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
