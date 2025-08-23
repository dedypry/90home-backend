import type { Knex } from 'knex';

const tableName = 'product_variants';
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.string('type', 255).notNullable();
    table.string('blok', 255);
    table.decimal('price', 18, 2).defaultTo(0);
    table.text('description');
    table
      .bigInteger('product_id')
      .unsigned()
      .references('id')
      .inTable('products')
      .onDelete('SET NULL');
    table.specificType('images', 'text[]').defaultTo(knex.raw("'{}'"));
    table.decimal('commission_fee', 8, 2).notNullable().defaultTo(0);
    table.decimal('ppn', 8, 2).notNullable().defaultTo(0);
    table.decimal('pph', 8, 2).notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
