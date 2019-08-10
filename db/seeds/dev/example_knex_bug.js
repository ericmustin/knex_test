exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('example_knex_bug').del()
    .then(function () {
      // Inserts seed entries
      return knex('example_knex_bug').insert([
        {id: 1, message: 'rowValue1'},
        {id: 2, message: 'rowValue2'},
        {id: 3, message: 'rowValue3'}
      ]);
    });
};
