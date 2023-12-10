import { Entity } from '@/shared/domain/entity'
import { NotFoundError } from '@/shared/domain/errors/not-found.error'
import { IRepository } from '@/shared/domain/repository/repository-interface'
import { ValueObject } from '@/shared/domain/value-object'

export abstract class InMemoryRepository<
  E extends Entity,
  EntityId extends ValueObject
> implements IRepository<E, EntityId>
{
  items: E[] = []

  async insert(entity: E): Promise<void> {
    this.items.push(entity)
  }

  async bulkInsert(entities: E[]): Promise<void> {
    this.items.push(...entities)
  }

  async update(entity: E): Promise<void> {
    const indexFound = this._findIndex(entity.entity_id as EntityId)

    this.items[indexFound] = entity
  }

  async delete(entity_id: EntityId): Promise<void> {
    const indexFound = this._findIndex(entity_id)

    this.items.splice(indexFound, 1)
  }

  async findById(entity_id: EntityId): Promise<E | null> {
    const item = this.items.find((item) => item.entity_id.equals(entity_id))

    return typeof item === 'undefined' ? null : item
  }

  async findAll(): Promise<E[]> {
    return this.items
  }

  protected _findIndex(entity_id: EntityId): number {
    const indexFound = this.items.findIndex((item) =>
      item.entity_id.equals(entity_id)
    )

    if (indexFound === -1) {
      throw new NotFoundError(entity_id, this.getEntity())
    }

    return indexFound
  }

  abstract getEntity(): new (...args: any[]) => E
}
