
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
       {projects_id: 1, description:"loosen oil pan bolt to drain oil", notes:"careful not to spill", completed: false},
       {projects_id: 1, description:"screw bolt back in and add new oil", notes:"careful not to spill", completed: false},
       {projects_id: 2, description:"run dirty clothes in washer", notes:"do not overfill", completed: false},
       {projects_id: 2, description:"run dirty clothes in dryer", notes:"do not overfill", completed: false}

      ]);
    });
};
