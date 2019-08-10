# knex_test
example to demonstrate knex integration workaround

currently knex query not ending in `.then` will not be connected to rest of trace

## Setup

#### DB Setup

```bash
$ psql
```

```sql
CREATE DATABASE example_knex_bug_db;
```

#### Dependancies

```bash
$ npm install
```

#### Knex 

##### Run Migrations

```
$ knex migrate:latest
```

##### Seed DB

```bash
$ knex seed:run
```


## Start

```bash
$ npm start
$ curl localhost:3000
```


## Workaround

```js

  //add .then(x => x) to chained methods in index.js 
  var info = await database('example_knex_bug').where({ message: 'rowValue1' }).first().then(x => x)
```