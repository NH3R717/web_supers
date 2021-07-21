# FROM node:14.16.0-alpine3.13

FROM node:alpine as builder

WORKDIR /app

WORKDIR /app
COPY package.json ./
RUN npm config set registry http://registry.npmjs.org/
RUN npm install 
# RUN npm install –f
COPY . .

FROM nginx
# EXPOSE 80
COPY --from=builder /app/public /usr/share/nginx/html