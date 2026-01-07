# ===========================================
# Stage 1: Build the Astro site
# ===========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the static site
RUN npm run build

# ===========================================
# Stage 2: Serve with Caddy
# ===========================================
FROM caddy:alpine

# Copy Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Copy built static files from builder stage
COPY --from=builder /app/dist /usr/share/caddy

# Expose port 80
EXPOSE 80

# Caddy starts automatically
