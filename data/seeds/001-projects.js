
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
       {name: 'change oil', description:'change the oil in a car', completed: false},
       {name: 'do laundry', description:'wash your clothes', completed: false},
      ]);
    });
};
