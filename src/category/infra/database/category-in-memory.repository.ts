import { Category } from '@/category/domain/category.entity'
import { Uuid } from '@/shared/domain/value-objects/uuid.vo'
import { InMemoryRepository } from '@/shared/infra/database/in-memory/in-memory.repository'

export class CategoryInMemoryRepository extends InMemoryRepository<
  Category,
  Uuid
> {
  getEntity(): new (...args: any[]) => Category {
    return Category
  }
}
