FROM node:7.6.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./node_modules /usr/src/app/node_modules

RUN npm set registry https://registry.npm.taobao.org/

RUN apt-get update

RUN apt-get install -y pdftk

CMD ["./node_modules/pm2/bin/pm2-docker", "process.yml"]