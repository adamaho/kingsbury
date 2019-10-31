FROM node:10.16.0
WORKDIR /src
COPY ./package.json /src
COPY ./yarn.lock /src
COPY ./tsconfig.json /src
ENV NODE_ENV=development
RUN yarn install
COPY . /src
