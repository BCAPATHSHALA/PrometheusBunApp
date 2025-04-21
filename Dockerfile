# Use official Bun image
FROM oven/bun:1

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies using Bun
COPY bun.lock ./
COPY package.json ./
RUN bun install

# Copy the rest of the app
COPY . .

# Expose app port
EXPOSE 3000

# Start the app
CMD ["bun", "run", "start"]
