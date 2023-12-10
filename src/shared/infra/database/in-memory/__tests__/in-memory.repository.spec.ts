import { Entity } from '@/shared/domain/entity'
import { Uuid } from '@/shared/domain/value-objects/uuid.vo'

import { InMemoryRepository } from '../in-memory.repository'
import { NotFoundError } from '@/shared/domain/errors/not-found.error'

type StubEntityConstructor = {
  entity_id?: Uuid
  name: string
  price: number
}

class StubEntity extends Entity {
  entity_id: Uuid
  name: string
  price: number

  constructor({ entity_id, name, price }: StubEntityConstructor) {
    super()
    this.entity_id = entity_id || new Uuid()
    this.name = name
    this.price = price
  }

  toJSON() {
    return {
      entity_id: this.entity_id.id,
      name: this.name,
      price: this.price
    }
  }
}

class StubInMemoryRepository extends InMemoryRepository<StubEntity, Uuid> {
  getEntity(): new (...args: any[]) => StubEntity {
    return StubEntity
  }
}

describe('InMemoryRepository unit tests', () => {
  let repo: StubInMemoryRepository

  beforeEach(() => {
    repo = new StubInMemoryRepository()
  })

  it('should insert a new entity', async () => {
    const entity = new StubEntity({
      name: 'test',
      price: 10
    })

    repo.insert(entity)

    expect(repo.items).toHaveLength(1)
    expect(repo.items[0]).toEqual(entity)
  })

  it('should bulkInsert multiple entities', async () => {
    const entity1 = new StubEntity({
      name: 'test',
      price: 10
    })

    const entity2 = new StubEntity({
      name: 'test',
      price: 10
    })

    repo.bulkInsert([entity1, entity2])

    expect(repo.items).toHaveLength(2)
    expect(repo.items).toEqual([entity1, entity2])
  })

  it('should find an entity by id', async () => {
    const entity = new StubEntity({
      name: 'test',
      price: 10
    })

    repo.insert(entity)

    const result = await repo.findById(entity.entity_id)

    expect(result).toEqual(entity)
  })

  it('should find all entities', async () => {
    const entity1 = new StubEntity({
      name: 'test',
      price: 10
    })

    const entity2 = new StubEntity({
      name: 'test',
      price: 10
    })

    repo.insert(entity1)
    repo.insert(entity2)

    const result = await repo.findAll()

    expect(result).toEqual([entity1, entity2])
  })

  it('should update an entity', async () => {
    const entity = new StubEntity({
      name: 'test',
      price: 10
    })

    repo.insert(entity)

    entity.name = 'test2'
    entity.price = 20

    repo.update(entity)

    const result = await repo.findById(entity.entity_id)

    expect(result).toEqual(entity)
  })

  it('should delete an entity', async () => {
    const entity = new StubEntity({
      name: 'test',
      price: 10
    })

    repo.insert(entity)

    repo.delete(entity.entity_id)

    const result = await repo.findById(entity.entity_id)

    expect(result).toBeNull()
  })

  it('should throw an error when updating an entity that does not exist', async () => {
    const entity = new StubEntity({
      name: 'test',
      price: 10
    })

    expect(() => repo.update(entity)).rejects.toThrow(
      new NotFoundError(entity.entity_id, StubEntity)
    )
  })

  it('should throw an error when deleting an entity that does not exist', async () => {
    const entity = new StubEntity({
      name: 'test',
      price: 10
    })

    expect(() => repo.delete(entity.entity_id)).rejects.toThrow(
      new NotFoundError(entity.entity_id, StubEntity)
    )
  })
})
