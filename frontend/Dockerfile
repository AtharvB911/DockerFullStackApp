# Base image
FROM node:18

# Working directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
