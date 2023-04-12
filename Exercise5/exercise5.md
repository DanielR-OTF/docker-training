# 1 Using the ENV instruction

```bash
docker build --build-arg TOKEN='anaccesstoken' -t daniro46/mongo:test .

```

# 2 Using the -e flag

```bash
docker run -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=somepass daniro46/mongo:test

```

# 3 Using an env file

```bash
 docker run --env-file ./.env -d daniro46/mongo:test

```
