# Use official Node.js 20 image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files first (optimizes caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose application port
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
