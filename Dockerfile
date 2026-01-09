# ===========================================
# Stage 1: Build the Astro site
# ===========================================
FROM node:25.2.1-alpine AS builder

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
FROM caddy:2.11-alpine

# Copy Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Copy built static files from builder stage
COPY --from=builder /app/dist /usr/share/caddy

# Expose ports for HTTP and HTTPS
EXPOSE 80
EXPOSE 443

# Caddy starts automatically
