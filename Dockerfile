
# pull the official base image

FROM node:current-alpine

# set working direction

WORKDIR /portfolio

# add `/app/node_modules/.bin` to $PATH

ENV PATH /portfolio/node_modules/.bin:$PATH

# install application dependencies

COPY package.json ./

RUN npm i

# add app

COPY . ./

# start app

CMD ["npm", "start"]