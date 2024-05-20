FROM node:20.12.2

RUN npm install

CMD ["npm", "run", "dev"]
