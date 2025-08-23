import type { Knex } from 'knex';

const tableName = 'orders';
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.bigInteger('product_id').notNullable();
    table.bigInteger('user_id').notNullable();
    table.json('product').notNullable();

    table.string('payment_type', 255);
    table.string('agent_coordinator', 255);
    table.string('customer', 255);
    table.string('promo', 255);
    table.string('status', 255).notNullable();

    table.decimal('price', 18, 2).notNullable();
    table.decimal('commission', 18, 2).notNullable();

    table.timestamp('booking_at', { useTz: false });
    table.timestamp('payment_at', { useTz: false });
    table.timestamp('akad_at', { useTz: false });

    table.decimal('booking_fee', 18, 2).defaultTo(0);
    table
      .bigInteger('product_variant_id')
      .references('id')
      .inTable('product_variants');
    table.specificType('attachment', 'text[]').defaultTo(knex.raw("'{}'"));
    table.string('blok', 255);
    table.integer('developer_id').references('id').inTable('developers');
    table.integer('qty').defaultTo(1);
    table.integer('invoice_id');

    table.boolean('is_payment_agent').defaultTo(false);
    table.boolean('is_payment_sales').defaultTo(false);

    table.decimal('commission_sales', 18, 2).defaultTo(0);
    table.decimal('commission_brand', 18, 2).defaultTo(0);
    table.integer('ppn').defaultTo(0);

    table.decimal('commission_total', 18, 2).defaultTo(0);
    table.decimal('commission_subtotal', 18, 2).defaultTo(0);
    table.decimal('ppn_total', 18, 2).defaultTo(0);

    table.json('agent');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
