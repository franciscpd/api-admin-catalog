import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength
} from 'class-validator'

import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-fields'

import { Category } from './category.entity'

class CategoryRules {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string

  @IsOptional()
  @IsString()
  description: string | null

  @IsBoolean()
  @IsNotEmpty()
  is_active: boolean

  @IsDate()
  @IsOptional()
  created_at: Date | null

  @IsDate()
  @IsOptional()
  updated_at: Date | null

  constructor({
    name,
    description,
    is_active,
    created_at,
    updated_at
  }: Category) {
    Object.assign(this, {
      name,
      description,
      is_active,
      created_at,
      updated_at
    })
  }
}

class CategoryValidator extends ClassValidatorFields<CategoryRules> {
  validate(entity: Category): boolean {
    return super.validate(new CategoryRules(entity))
  }
}

export class CategoryValidatorFactory {
  static create() {
    return new CategoryValidator()
  }
}
