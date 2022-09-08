import { Table, Column, Model, PrimaryKey, IsIn, IsUrl, Default } from 'sequelize-typescript';

@Table
export class BapOnsearchData extends Model {
  @PrimaryKey
  @Column
  id: string

  @Column
  transaction_id: string

  @Column
  transaction_data: string

  @Default(true)
  @Column
  seen: boolean
}