export type ScopeType =
  | 'global'
  | 'profile'
  | 'program'
  | 'workout'
  | 'exercise'
  | 'session'

export interface Scope {
  type: ScopeType
  id?: string
}