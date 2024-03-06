# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.8.1

FROM node:${NODE_VERSION}-alpine


COPY package.json .
COPY package-lock.json .

RUN npm install 

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application in dev mode to use with Compose watch feature
CMD ["npm", "start"]
