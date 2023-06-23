import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TeamEvent extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public dateInit: Date

  @column()
  public dateEnd: Date

  @column()
  public eventId: number

  @column()
  public teamId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
