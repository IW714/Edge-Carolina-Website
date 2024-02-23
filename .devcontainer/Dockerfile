# Use the official Node.js image as a base
FROM node:14-bullseye

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000
# Set the default command to run your app
CMD ["node", "index.js"]
