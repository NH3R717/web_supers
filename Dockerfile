# FROM debian:buster
FROM node:14.17.3-buster-slim AS build

# FROM node:alpine as builder


WORKDIR /app
COPY package.json ./
# RUN apt install nasm
RUN apt-get clean && apt-get update && apt-get install -y nasm && rm -rf /var/lib/apt/lists/*
RUN npm install --verbose
COPY . .
RUN ["npm", "run", "build"]

FROM nginx
# EXPOSE 80
COPY --from=builder /app/public /usr/share/nginx/html

# https://stackoverflow.com/questions/18419144/npm-not-working-read-econnreset