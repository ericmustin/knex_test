module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/example_knex_bug_db',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
}