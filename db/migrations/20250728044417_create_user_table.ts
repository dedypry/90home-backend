import type { Knex } from 'knex';

const tableName = 'users';
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.integer('parent_id');
    table.string('name');
    table.string('email').unique().notNullable();
    table.string('password');
    table.dateTime('email_verified_at').nullable();
    table.dateTime('last_login').nullable().defaultTo(knex.fn.now());
    table.boolean('is_active').defaultTo(true);
    table.string('status', 10).nullable();
    table.text('bio').nullable();
    table.integer('deleted_by').references('id').inTable('users');
    table.dateTime('deleted_at').nullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
  await knex.raw('DROP SEQUENCE IF EXISTS users_sort_seq');
}
