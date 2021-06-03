FROM node:12
WORKDIR /app
COPY ./build ./
COPY .env ./
