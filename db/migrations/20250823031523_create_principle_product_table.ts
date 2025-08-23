import type { Knex } from 'knex';

const tableName = 'principle_orders';
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users');
    table.integer('order_id').references('id').inTable('orders');
    table.boolean('is_payment').defaultTo(false);
    table.decimal('fee', 18, 2).defaultTo(0);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
