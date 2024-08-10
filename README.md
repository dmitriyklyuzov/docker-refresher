# Docker refresher

## Starting containers manually

### create docker network

```bash
docker network create mongo-network
```

### start mongodb

```bash
docker run -d \
-p 27017:27017 \
--network mongo-network \
--name mongo \
-e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
mongo
```

### start mongo-express

```bash
docker run -d \
-p 8081:8081 \
--name mongo-express \
--network mongo-network \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=mongoadmin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
mongo-express
```

## Using `docker-compose`

To launch the `mongo` and the `mongo-express` containers in a network using `docker-compose`, run:

```bash
docker-compose -f mongo.yaml up -d
```

## Building using `Dockerfile`

```bash
docker build -t my-app:1.0 --no-cache .
```

Use the newly-built image

```bash
docker run --name my-app -p 3000:3000 my-app:1.0
```

Remove the image

```bash
docker rm $(docker ps -aqf "name=my-app") && docker rmi $(docker images my-app -q)
```

## Resources

- https://youtu.be/3c-iBn73dDE
