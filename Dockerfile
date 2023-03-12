# syntax=docker/dockerfile:1.4

FROM --platform=$BUILDPLATFORM node:latest as builder

RUN mkdir /project
WORKDIR /project

# RUN apt-get update && \ 
#     apt-get install -y curl && \
#     apt-get install -y iputils-ping

RUN npm install -g @angular/cli@15

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]