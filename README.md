# Trivago

A booking API for hoteliers. This repo only has the code of the API. The frontend repo is [here](https://github.com/ahmedelazazy/trivago-client).

## Demo

https://trivago-api.ahmedelazazy.com

## Documentation

https://trivago-api.ahmedelazazy.com/api-docs

## Stack

- Express
- PostgreSQL
- Sequelize
- Swagger
- Jest
- Docker

## Getting started

- Clone this repo `git clone`
- Copy `.env.example` to `.env`
- Update database credentials as needed in `.env`
- Build and initialize the container

```
docker-compose up -d --build
```

- To attach the shell of the docker container, run:

```
docker-compose exec api sh
```

- From the container terminal, run the seeders to initialize the database with data

```
npm run seed
```

- Browse the API documentation on `localhost:8888/api-docs`

### Tests

- From the container terminal, run the tests

```
npm test
```
