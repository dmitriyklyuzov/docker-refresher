FROM node:13-alpine

ENV MONGO_DB_USERNAME=admin MONGO_DB_PWD=password

# RUN lets you execute commands inside the container
# you can have multiple RUN commands
RUN mkdir -p /home/app

# COPY executes on the host
COPY . /home/app

# CMD executes an entrypoint command
# you can only have one CMD per Dockerfile
CMD ["node", "server.js"]