FROM node:alpine

WORKDIR /web

COPY package.json ./

RUN npm install

COPY . /web

EXPOSE 3000

CMD ["npm", "start"]