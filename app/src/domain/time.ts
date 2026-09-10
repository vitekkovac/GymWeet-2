export type ISODateTime = string

export function nowISO(): ISODateTime {
  return new Date().toISOString()
}

export interface Timestamps {
  createdAt: ISODateTime
  updatedAt: ISODateTime
}