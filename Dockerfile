FROM node:12-alpine AS build
RUN apk add --no-cache make gcc g++ python
RUN mkdir -p /app/public
COPY package.json /app
WORKDIR /app
RUN npm install --production && npm cache clean --force

FROM node:12-alpine AS release
COPY --from=build /app /app
WORKDIR /app
# see https://github.com/Inist-CNRS/ezmaster
RUN echo '{ \
  "httpPort": 31976, \
  "configPath": "/app/config.json", \
  "dataPath": "/app/public" \
}' > /etc/ezmaster.json

COPY config.json /app
COPY generate-dotenv.js /app
COPY public/ /app/public

CMD [ "npm", "start" ]
