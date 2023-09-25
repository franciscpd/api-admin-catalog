import { Uuid } from '@/shared/domain/value-objects/uuid.vo'

import { EntityValidationError } from '@/shared/domain/validators/validation.error'

import { CategoryValidatorFactory } from './category.validator'
import { Entity } from '@/shared/domain/entity'
import { ValueObject } from '@/shared/domain/value-object'

export type CategoryConstructorProps = {
  category_id?: Uuid
  name: string
  description?: string
  is_active?: boolean
  created_at?: Date
  updated_at?: Date
}

export type CategoryCreateCommand = Pick<
  CategoryConstructorProps,
  'name' | 'description' | 'is_active'
>

export type CategoryUpdateCommand = Pick<
  CategoryConstructorProps,
  'name' | 'description'
>

export class Category implements Entity {
  category_id: Uuid
  name: string
  description: string | null
  is_active: boolean
  created_at: Date
  updated_at: Date

  constructor(props: CategoryConstructorProps) {
    this.category_id = props.category_id ?? new Uuid()
    this.name = props.name
    this.description = props.description ?? null
    this.is_active = props.is_active ?? true
    this.created_at = props.created_at ?? new Date()
    this.updated_at = props.updated_at ?? new Date()
  }

  get entity_id(): ValueObject {
    return this.category_id
  }

  static create(props: CategoryCreateCommand): Category {
    const category = new Category(props)

    Category.validate(category)

    return category
  }

  changeName(name: string): void {
    this.name = name

    Category.validate(this)
  }

  changeDescription(description: string): void {
    this.description = description

    Category.validate(this)
  }

  update({ name, description }: CategoryUpdateCommand): void {
    this.name = name
    this.description = description

    Category.validate(this)
  }

  activate(): void {
    this.is_active = true
  }

  deactivate(): void {
    this.is_active = false
  }

  static validate(entity: Category) {
    const validator = CategoryValidatorFactory.create()
    const isValid = validator.validate(entity)

    if (!isValid) {
      throw new EntityValidationError(validator.errors)
    }
  }

  toJSON() {
    return {
      category_id: this.category_id.id,
      name: this.name,
      description: this.description,
      is_active: this.is_active,
      created_at: this.created_at,
      updated_at: this.updated_at
    }
  }
}
