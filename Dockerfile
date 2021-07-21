# FROM debian:buster
FROM node:14.17.3-alpine3.13 AS build

# FROM node:alpine as builder


WORKDIR /app
COPY package.json ./
RUN ["npm" "config" "set" "registry" "http://registry.npmjs.org/"]
RUN ["npm" "install" "--verbose"]
COPY . .
RUN ["npm", "run", "build"]

FROM nginx
# EXPOSE 80
COPY --from=builder /app/public /usr/share/nginx/html

# https://stackoverflow.com/questions/18419144/npm-not-working-read-econnreset