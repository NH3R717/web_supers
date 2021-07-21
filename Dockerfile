# FROM node:14.16.0-alpine3.13

FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN ["npm", "run", "build"]

FROM nginx
# EXPOSE 80
COPY --from=builder /app/public /usr/share/nginx/html