
exports.up = function(knex) {
  return knex.schema
    .createTable('project', tbl => {
        tbl.increments()
        tbl.string('project_name')
        .notNullable()
        tbl.string('project_description')
        tbl.boolean('project_completed')
        .notNullable()
        .defaultTo(false)
    })
    .createTable('resource', tbl => {
        tbl.increments()
        tbl.string('resource_name')
        .notNullable()
        tbl.string('resource_description')
    })
    .createTable('task', tbl => {
        tbl.increments()
        tbl.string('task_description')
        .notNullable()
        tbl.string('task_notes')
        tbl.boolean('task_completed')
        .notNullable()
        .defaultTo(false)
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
    })
    .createTable('project_resource', tbl => {
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resource')
        tbl.primary(['project_id', 'resource_id'])
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project')
  
};
