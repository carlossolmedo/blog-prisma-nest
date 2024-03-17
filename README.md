# nw-interview
Improve solutions of fork NW Tech Interview

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
npm install
```


## Prisma & DB

### database

To start the database, you can use docker

```shell
docker compose up database
```

### migrations

Apply migrations to the database with the following command

```shell
npm run migrate
```

### seed

You can then populate the database with the seeds we created !

```shell
npm run seed
```

## Running the app

```bash
# Docker database and backend
docker compose up

# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Login

To login on the app in the dev environment you can call the login endpoint with the credentials found in the `prisma/seed.ts` file,
and then use the `accessToken` provided as a Bearer Token. With swagger you can use this token to login.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
