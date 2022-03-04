import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Transfer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public numberTransfer:string

  @column()
  public amount:number
  
  @column()
  public status:boolean

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public validatedAt: DateTime
}
