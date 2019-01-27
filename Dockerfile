FROM mhart/alpine-node:8.9

WORKDIR /app

COPY . .

RUN npm install --production && npm i -g gatsby-cli && gatsby build

EXPOSE 9000
CMD ["gatsby", "serve"]