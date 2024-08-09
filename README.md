# README

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

## docker-compose

To launch the `mongo` and the `mongo-express` containers in a network using `docker-compose`, run:

```bash
docker-compose -f mongo.yaml up -d
```

## Resources

- https://youtu.be/3c-iBn73dDE
