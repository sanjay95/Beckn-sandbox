import { Table, Column, Model, PrimaryKey, IsIn, IsUrl, Default } from 'sequelize-typescript';
import { TextDataType } from 'sequelize/types';


@Table
export class BapOnsearchData extends Model {
  @PrimaryKey
  @Column
  id: string

  @Column
  transaction_id: string

  @Column
  transaction_data: string

  @Default(false)
  @Column
  seen: boolean
}