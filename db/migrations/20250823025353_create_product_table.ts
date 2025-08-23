import type { Knex } from 'knex';

const tableName = 'products';
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.specificType('images', 'text[]').defaultTo(knex.raw("'{}'"));
    table.decimal('price', 18, 2).defaultTo(0);
    table.string('cluster', 255).notNullable();
    table.string('type', 255);
    table.string('blok', 255);
    table.text('description');
    table.integer('updated_by').references('id').inTable('users');

    table.specificType('attachments', 'text[]').defaultTo(knex.raw("'{}'"));
    table.string('listing_type', 255).defaultTo('JUAL');
    table.integer('developer_id').references('id').inTable('developers');

    table.decimal('commission_fee', 8, 2).defaultTo(0);
    table.decimal('ppn', 8, 2).defaultTo(0);
    table.decimal('pph', 8, 2).defaultTo(0);

    table.string('type_ads', 255);
    table.integer('bedroom').defaultTo(0);
    table.integer('bathroom').defaultTo(0);
    table.integer('number_of_floors').defaultTo(0);

    table.decimal('surface_area', 8, 2).defaultTo(0);
    table.decimal('building_area', 8, 2).defaultTo(0);

    table.string('certificate', 255);
    table.string('furniture', 255);
    table.string('listing_title', 255);

    table.text('public_facilities');
    table.text('type_property');
    table.integer('pic_id').references('id').inTable('users');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
