# FROM debian:buster
FROM node:14.17.3-alpine3.13 AS build

# FROM node:alpine as builder


WORKDIR /app
COPY package.json ./
# RUN apt install nasm
RUN apt-get apt-get clean && update && apt-get install -y nasm && rm -rf /var/lib/apt/lists/*
RUN npm install
COPY . .
RUN ["npm", "run", "build"]

FROM nginx
# EXPOSE 80
COPY --from=builder /app/public /usr/share/nginx/html

# https://stackoverflow.com/questions/18419144/npm-not-working-read-econnreset