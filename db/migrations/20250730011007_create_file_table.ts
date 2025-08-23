import type { Knex } from 'knex';

const tableName = 'files';
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.integer('parent_id').nullable();
    table.string('name');
    table.string('url');
    table.string('mime_type');
    table.float('size');
    table.string('extension', 10);
    table.string('table').nullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
