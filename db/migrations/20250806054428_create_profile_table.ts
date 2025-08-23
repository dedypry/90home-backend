import type { Knex } from 'knex';

const tableName = 'profiles';
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users');
    table.string('nik').nullable();
    table.string('place_birth').nullable();
    table.date('date_birth').nullable();
    table.enum('gender', ['male', 'female']).nullable();
    table.text('address');
    table.integer('province_id').references('id').inTable('provinces');
    table.integer('city_id').references('id').inTable('cities');
    table.integer('district_id').references('id').inTable('districts');
    table.string('phone').nullable();
    table.string('photo').nullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
