# Official Playwright image with browsers and dependencies
FROM mcr.microsoft.com/playwright:v1.38.0-focal

# Set working directory inside container
WORKDIR /app

# Copy package.json first for caching
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Compile TypeScript
RUN npx tsc

# Default command to run tests
CMD ["npx", "playwright", "test", "--reporter=html"]