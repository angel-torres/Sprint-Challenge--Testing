
exports.up = function(knex, Promise) {
    return knex.schema.createTable('games', table => {
        table.increments();
        table.string('title').unique().notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('games');
};
