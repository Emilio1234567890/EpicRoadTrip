FROM node:16.18.1-alpine as build-stage

WORKDIR /app

COPY package.json . 

RUN npm install
RUN npm install axios

COPY . .

EXPOSE 4444

CMD ["npm", "start"]