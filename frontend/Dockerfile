# Dockerfile for React client

# Build react client
FROM node:18

# Working directory be app
WORKDIR /app

COPY package*.json ./

###  Installing dependencies

RUN npm ci

# copy local files to app folder
COPY . .

CMD ["npm","start"]