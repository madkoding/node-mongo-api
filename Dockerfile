FROM node:14-alpine

# Create srv directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN yarn

# Bundle app source
COPY . .

ENV PORT 3000
ENV URI 'mongodb://root:root@mongo:27017/example?authSource=admin&w=1'

EXPOSE ${PORT}

CMD [ "yarn", "start" ]
