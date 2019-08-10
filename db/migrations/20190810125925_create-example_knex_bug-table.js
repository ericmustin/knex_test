exports.up = function(knex) {
  let createQuery = `CREATE TABLE example_knex_bug(
    id SERIAL PRIMARY KEY NOT NULL,
    message TEXT,
    created_at TIMESTAMP
  )`
  return knex.raw(createQuery)  
};

exports.down = function(knex) {
  let dropQuery = `DROP TABLE example_knex_bug`
  return knex.raw(dropQuery)
};
