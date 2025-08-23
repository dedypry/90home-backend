import type { Knex } from 'knex';

const tableName = 'developers';
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.string('logo');
    table.string('company_name');
    table.string('company_brand');
    table.string('phone', 20);
    table.string('email');
    table.text('address');
    table.string('address_title');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
