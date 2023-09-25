import { Uuid } from '@/shared/domain/value-objects/uuid.vo'

import { Category } from '../category.entity'

describe('Category unit tests', () => {
  let validateSpy: jest.SpyInstance

  beforeEach(() => {
    validateSpy = jest.spyOn(Category, 'validate')
  })

  describe('constructor', () => {
    it('should create a category with name set', () => {
      const dataCategory = {
        name: 'Movie'
      }

      const category = new Category(dataCategory)

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe(dataCategory.name)
      expect(category.description).toBeNull()
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBeInstanceOf(Date)
      expect(category.updated_at).toBeInstanceOf(Date)
    })

    it('should create a category with name and description set', () => {
      const dataCategory = {
        name: 'Show',
        description: 'Show category description'
      }

      const category = new Category(dataCategory)

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe(dataCategory.name)
      expect(category.description).toBe(dataCategory.description)
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBeInstanceOf(Date)
      expect(category.updated_at).toBeInstanceOf(Date)
    })

    it('should create a category with name, description and is_active set', () => {
      const dataCategory = {
        name: 'Game',
        description: 'Game category description',
        is_active: true
      }

      const category = new Category(dataCategory)

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe(dataCategory.name)
      expect(category.description).toBe(dataCategory.description)
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBeInstanceOf(Date)
      expect(category.updated_at).toBeInstanceOf(Date)
    })

    it('should create a category with name, description, is_active and created_at set', () => {
      const dataCategory = {
        name: 'Documentary',
        description: 'Documentary category description',
        is_active: true,
        created_at: new Date('2021-01-01')
      }

      const category = new Category(dataCategory)

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe(dataCategory.name)
      expect(category.description).toBe(dataCategory.description)
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBe(dataCategory.created_at)
      expect(category.updated_at).toBeInstanceOf(Date)
    })

    it('should create a category with name, description, is_active, created_at and updated_at set', () => {
      const dataCategory = {
        name: 'Movie',
        description: 'Movie category description',
        is_active: true,
        created_at: new Date('2021-01-01'),
        updated_at: new Date('2021-01-01')
      }

      const category = new Category(dataCategory)

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe(dataCategory.name)
      expect(category.description).toBe(dataCategory.description)
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBe(dataCategory.created_at)
      expect(category.updated_at).toBe(dataCategory.updated_at)
    })

    it('should create a category with is_active set false', () => {
      const dataCategory = {
        name: 'Show',
        is_active: false
      }

      const category = new Category(dataCategory)

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe(dataCategory.name)
      expect(category.description).toBeNull()
      expect(category.is_active).toBeFalsy()
      expect(category.created_at).toBeInstanceOf(Date)
      expect(category.updated_at).toBeInstanceOf(Date)
    })
  })

  describe('create command', () => {
    it('should create a category with name set', () => {
      const dataCategory = {
        name: 'Movie'
      }

      const category = Category.create(dataCategory)

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe(dataCategory.name)
      expect(category.description).toBeNull()
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBeInstanceOf(Date)
      expect(category.updated_at).toBeInstanceOf(Date)

      expect(validateSpy).toBeCalledTimes(1)
    })

    it('should create a category with name and description set', () => {
      const dataCategory = {
        name: 'Show',
        description: 'Show category description'
      }

      const category = Category.create(dataCategory)

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe(dataCategory.name)
      expect(category.description).toBe(dataCategory.description)
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBeInstanceOf(Date)
      expect(category.updated_at).toBeInstanceOf(Date)
      expect(validateSpy).toBeCalledTimes(1)
    })

    it('should create a category with name, description and is_active set', () => {
      const dataCategory = {
        name: 'Game',
        description: 'Game category description',
        is_active: true
      }

      const category = Category.create(dataCategory)

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe(dataCategory.name)
      expect(category.description).toBe(dataCategory.description)
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBeInstanceOf(Date)
      expect(category.updated_at).toBeInstanceOf(Date)
      expect(validateSpy).toBeCalledTimes(1)
    })

    it('should create a category with name, description, is_active and created_at set', () => {
      const dataCategory = {
        name: 'Documentary',
        description: 'Documentary category description',
        is_active: true,
        created_at: new Date('2021-01-01')
      }

      const category = Category.create(dataCategory)

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe(dataCategory.name)
      expect(category.description).toBe(dataCategory.description)
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBe(dataCategory.created_at)
      expect(category.updated_at).toBeInstanceOf(Date)
      expect(validateSpy).toBeCalledTimes(1)
    })

    it('should create a category with name, description, is_active, created_at and updated_at set', () => {
      const dataCategory = {
        name: 'Movie',
        description: 'Movie category description',
        is_active: true,
        created_at: new Date('2021-01-01'),
        updated_at: new Date('2021-01-01')
      }

      const category = Category.create(dataCategory)

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe(dataCategory.name)
      expect(category.description).toBe(dataCategory.description)
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBe(dataCategory.created_at)
      expect(category.updated_at).toBe(dataCategory.updated_at)
      expect(validateSpy).toBeCalledTimes(1)
    })

    it('should create a category with is_active set false', () => {
      const dataCategory = {
        name: 'Show',
        is_active: false
      }

      const category = Category.create(dataCategory)

      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe(dataCategory.name)
      expect(category.description).toBeNull()
      expect(category.is_active).toBeFalsy()
      expect(category.created_at).toBeInstanceOf(Date)
      expect(category.updated_at).toBeInstanceOf(Date)
      expect(validateSpy).toBeCalledTimes(1)
    })
  })

  describe('update command', () => {
    it('should update a category with name set', () => {
      const category = Category.create({
        name: 'Movie'
      })

      category.update({
        name: 'Show'
      })

      expect(category.name).toBe('Show')
      expect(validateSpy).toBeCalledTimes(2)
    })

    it('should update a category with name and description set', () => {
      const category = Category.create({
        name: 'Show'
      })

      category.update({
        name: 'Movie',
        description: 'Movie category description'
      })

      expect(category.name).toBe('Movie')
      expect(category.description).toBe('Movie category description')
      expect(validateSpy).toBeCalledTimes(2)
    })
  })

  describe('category_id field', () => {
    const arrange = [
      { category_id: null },
      { category_id: undefined },
      { category_id: new Uuid() }
    ]

    it.each(arrange)(
      'should create a category with category_id set %j',
      ({ category_id }) => {
        const dataCategory = {
          name: 'Movie',
          category_id: category_id as any
        }

        const category = new Category(dataCategory)

        expect(category.category_id).toBeInstanceOf(Uuid)
      }
    )
  })

  describe('changeName', () => {
    it('should change name', () => {
      const category = Category.create({
        name: 'Movie'
      })

      category.changeName('Show')

      expect(category.name).toBe('Show')
      expect(validateSpy).toBeCalledTimes(2)
    })
  })

  describe('changeDescription', () => {
    it('should change description', () => {
      const categoryDescription = 'Movie category description'
      const category = Category.create({
        name: 'Movie'
      })

      category.changeDescription(categoryDescription)

      expect(category.description).toBe(categoryDescription)
      expect(validateSpy).toBeCalledTimes(2)
    })
  })

  describe('activate', () => {
    it('should activate category', () => {
      const category = Category.create({
        name: 'Movie',
        is_active: false
      })

      category.activate()

      expect(category.is_active).toBeTruthy()
    })
  })

  describe('deactivate', () => {
    it('should deactivate category', () => {
      const category = Category.create({
        name: 'Movie'
      })

      category.deactivate()

      expect(category.is_active).toBeFalsy()
    })
  })
})
