export type EntityId = string

export type UserId = EntityId
export type ProfileId = EntityId
export type ExerciseId = EntityId
export type ProgramId = EntityId
export type WorkoutId = EntityId
export type WorkoutSessionId = EntityId
export type ActivityId = EntityId
export type GymId = EntityId
export type EquipmentId = EntityId

export function createEntityId(): EntityId {
  return crypto.randomUUID()
}