FROM node:8.16.1-alpine
WORKDIR /app
COPY . /app/
RUN ls -la /app/*
RUN npm install
EXPOSE 5000
CMD node server.js

#ENTRYPOINT ["node", "server.js"]
#COPY package.json /app
