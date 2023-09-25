import { Entity } from '@/shared/domain/entity'
import { ValueObject } from '@/shared/domain/value-object'

export interface IRepository<E extends Entity, EntityId extends ValueObject> {
  insert(entity: E): Promise<void>

  update(entity: E): Promise<void>

  delete(entity: E): Promise<void>

  findById(entity_id: EntityId): Promise<E>

  findAll(): Promise<E[]>
}