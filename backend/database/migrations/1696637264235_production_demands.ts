import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'production_demands'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('description')
      table.string('status').defaultTo('PLANEJADO')
      table.string('sku')
      table.double('planejado')
      table.double('produzido').defaultTo(0)
      table.timestamp('periodo_inicio')
      table.timestamp('periodo_fim')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
