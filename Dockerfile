FROM node:latest

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

RUN yarn add serve

ENV PORT=3000

EXPOSE 3000

CMD npx serve -s build -p 3000