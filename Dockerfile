FROM node:20-alpine

# RUN lets you execute commands inside the container
# you can have multiple RUN commands
RUN mkdir -p /home/app

# COPY executes on the host
COPY ./app /home/app/

RUN cd /home/app && npm install

# CMD executes an entrypoint command
# you can only have one CMD per Dockerfile
CMD ["node", "/home/app/server.js"]