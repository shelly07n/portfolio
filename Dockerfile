# Use an official Node.js runtime as the base image
FROM node:18-alpine as builder

# Create and set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Vue 3 application using Vite
RUN npm run build

# Install JSON Server globally
RUN npm install -g json-server

# Create and copy the db.json file into the container
COPY db.json .

# Specify the command to run your application and JSON Server simultaneously
CMD ["sh", "-c", "npm run dev & json-server --watch db.json --port 10000"]