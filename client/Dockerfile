FROM node:14.19.1-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./src ./src
COPY ./public ./public

EXPOSE 8000
CMD [ "npm", "run", "start-mac" ]