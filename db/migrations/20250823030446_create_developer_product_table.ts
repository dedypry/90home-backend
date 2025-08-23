import type { Knex } from 'knex';

const tableName = 'developer_product';
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.integer('developer_id').references('id').inTable('developers');
    table.integer('product_id').references('id').inTable('products');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
