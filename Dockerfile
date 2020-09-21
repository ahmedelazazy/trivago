FROM node:alpine

RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY . /home/node/app

RUN npm install

EXPOSE "$PORT"



