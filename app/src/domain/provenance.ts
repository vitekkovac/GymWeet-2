export type DataSource =
  | 'user'
  | 'system'
  | 'ai'
  | 'import'
  | 'device'
  | 'external'

export interface Provenance {
  source: DataSource
  sourceId?: string
}