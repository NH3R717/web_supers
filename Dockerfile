FROM node:16-alpine
# FROM node:14.16.0-alpine3.13

# FROM node:alpine as builder

WORKDIR /app

WORKDIR /app
COPY package.json ./
## find solution to limit build cpu
# RUN npm cache clean --force
# RUN npm install --unsafe-perm
RUN export NODE_OPTIONS=--max_old_space_size=8192
# RUN echo vm.swappiness=05 | sudo tee -a /etc/sysctl.conf
RUN npm config set registry http://registry.npmjs.org/
RUN npm install --verbose
# RUN npm install –f
COPY . .

FROM nginx
# EXPOSE 80
COPY --from=builder /app/public /usr/share/nginx/html

# https://stackoverflow.com/questions/18419144/npm-not-working-read-econnreset