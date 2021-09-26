FROM node:14.17-alpine AS buil
WORKDIR /app
COPY package.json
RUN npm install
COPY . .
RUN npm run buil