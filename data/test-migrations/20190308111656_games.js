
exports.up = function(knex, Promise) {
    return knex.schema.creteTable('games', table => {
        table.increments();

        table.string('name', 255).notNullable();
        table.string('genre', 255).notNullable();
        table.integer('releaseYear').notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
};
