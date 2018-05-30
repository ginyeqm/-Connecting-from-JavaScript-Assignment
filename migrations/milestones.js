exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestones', function (table) {
      table.increments();
      table.string('description');
      table.date('date_achieved');
      table.string(character varying(255));
      table.string(date);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
    ])
};
