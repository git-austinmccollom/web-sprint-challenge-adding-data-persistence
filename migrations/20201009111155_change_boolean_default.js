
exports.up = function(knex) {
  return knex.schema.alterTable('project', tbl => {
    tbl.boolean('project_completed')
    .notNullable()
    .defaultTo(false)
    .alter()
  })
  .alterTable('task', tbl => {
    tbl.boolean('task_completed')
    .notNullable()
    .defaultTo(false)
    .alter()
  })
};

exports.down = function(knex) {
    return knex.schema.alterTable('project', tbl => {
        tbl.boolean('project_completed')
        .notNullable()
        .defaultTo('False')
        .alter()
        
      })
      .alterTable('task', tbl => {
        tbl.boolean('task_completed')
        .notNullable()
        .defaultTo('False')
        .alter()
      })
};
