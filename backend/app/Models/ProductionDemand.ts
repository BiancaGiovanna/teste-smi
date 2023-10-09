import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
export default class ProductionDemand extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.date()
  public periodoInicio: DateTime

  @column.date()
  public periodoFim: DateTime

  @column()
  public description: string

  @column()
  public planejado: number

  @column()
  public produzido: number

  @column()
  public sku: string

  @column()
  public status: 'PLANEJADO' | 'EM ANDAMENTO' | 'CONCLUIDO'
}
