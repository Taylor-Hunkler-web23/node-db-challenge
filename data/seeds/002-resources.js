
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name:"wrench", description:"adjustable wrench"},
        {name:"oil", description:"10w-30"},
        {name:"washing machine", description:"samsung washing machine"},
        {name:"dryer", description:"samsung dryer"}
      ]);
    });
};
