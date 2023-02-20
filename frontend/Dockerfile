# DEV Stage
FROM node:16-alpine

## will install dependencies as local packages

ARG PROJECT

WORKDIR /app

EXPOSE 3000

RUN apk add --update --no-cache git

COPY $PROJECT/package*.json ./ 

RUN npm install  

# temp bug fix 
# waiting for https://github.com/facebook/create-react-app/pull/8079 to be merged
RUN sed -i "s/protocol: 'ws',/protocol: window.location.protocol === 'https:' ? 'wss' : 'ws',/g" node_modules/react-dev-utils/webpackHotDevClient.js

COPY $PROJECT/ .

ENTRYPOINT  npm start

