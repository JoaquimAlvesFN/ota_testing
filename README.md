
# Online Travel Agency

Base Project for an online travel agency


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Environment Variables

Adjust the environment variables by copying the .env.example file to .env and adjusting it so that the database can be created based on what is informed in the .env file

`PORT`

`HOST`

`NODE_ENV`

`APP_KEY`

`DRIVE_DISK`

`DB_CONNECTION`

`PG_HOST`

`PG_PORT`

`PG_USER`

`PG_PASSWORD`

`PG_DB_NAME`

## Deployment

To deploy this project run

```bash
  docker-compose up
```


## API Reference

#### Get all Users

```http
  GET /api/users
```

#### Get all Travels

```http
  GET /api/travels
```


## Features

- CRUD Users
- CRUD Travels


## Optimizations

#### Points that could be implemented from the most basic to the most complex

Error Handling: to avoid unhandled technical error
Unit Testing: make sure nothing goes out of control
Observability: integrate with an open source tool
Automate: improve the deployment process
Logic: improve travel booking process
Expand: integrate with some tool in the travel market


## Demo

Download the ota.json file and import it into insomnia for local testing

