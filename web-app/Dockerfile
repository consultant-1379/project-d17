# Dockerfile
FROM node:16.17.1-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . /app

EXPOSE 9090

CMD ["npm", "run", "container-start"]
