export type ConfidenceLevel = 'low' | 'medium' | 'high'

export interface Confidence {
  level: ConfidenceLevel
  score?: number
  reason?: string
}