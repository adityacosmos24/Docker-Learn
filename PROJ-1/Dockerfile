#using ubuntu as a base image now on ubuntu we will make a node js server
FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

#Install nodemon globally
RUN npm install -g nodemon

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY app.js app.js

RUN npm install

#Use nodemon to run app.js
ENTRYPOINT ["nodemon", "app.js"]
