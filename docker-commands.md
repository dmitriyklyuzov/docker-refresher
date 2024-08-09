# Commands

## create docker network
docker network create mongo-network

## start mongodb
```bash
docker run -d \                         
-p 27017:27017 \
--network mongo-network \
--name mongo \
-e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
mongo
```

## start mongo-express
```bash
docker run -d \
-p 8081:8081 \
--name mongo-express \
--network mongo-network \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=mongoadmin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
mongo-express
```