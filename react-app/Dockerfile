# syntax=docker/dockerfile:1

### STAGE 1: Build the folder ###

# Use the latest alpine build
FROM node:19-alpine as build

# Set working directory
WORKDIR /app

# Download dependencies
# ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm install

# Build
COPY . .
RUN npm run build

### STAGE 2: Run the server ###

# Use the latest alpine build
FROM node:19-alpine

# Set working directory
WORKDIR /deploy

# Copy build/ folder
COPY --from=build /app/build ./build

RUN ls -lAh
RUN find build/

# Install serve
RUN npm install -g serve

# Expose HTTP port
EXPOSE 80

ENTRYPOINT ["serve", "-s", "build", "-p", "80"]