import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Travel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public destination: string

  @column()
  public date: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
