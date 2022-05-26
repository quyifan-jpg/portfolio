FROM node:12
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

RUN npm run build
CMD ["npm", "start"]
