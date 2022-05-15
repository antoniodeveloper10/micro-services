FROM node:14.17.1

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001


CMD ["npm","run","start"]   
