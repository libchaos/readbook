export type DataType = 'value' | 'increament' | 'set'

export interface ClientChange {}


export interface ClientValueChange<T> extends ClientChange {
  lastModifiedTime: number
  value: T
}


export enum SetOperation {
  add,
  remove
}

export interface ClientSetV