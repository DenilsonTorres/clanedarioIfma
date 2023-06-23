import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'team_events'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.date('date_init').notNullable()
      table.date('date_end').notNullable()
      table
        .integer('event_id')
        .unsigned()
        .references('id')
        .inTable('events')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table
        .integer('team_id')
        .unsigned()
        .references('id')
        .inTable('teams')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }
  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
