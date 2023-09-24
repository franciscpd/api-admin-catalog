import { Category } from '../category.entity'

describe('Category validator', () => {
  describe('create command', () => {
    it('should throw an error if name is not provided', () => {
      expect(() => Category.create({ name: null })).containsErrorMessage({
        name: [
          'name must be shorter than or equal to 255 characters',
          'name must be a string',
          'name should not be empty'
        ]
      })
    })

    it('should throw an error if name is longer than 255 characters', () => {
      expect(() =>
        Category.create({ name: 'a'.repeat(256) })
      ).containsErrorMessage({
        name: ['name must be shorter than or equal to 255 characters']
      })
    })

    it('should throw an error if name is not a string', () => {
      expect(() => Category.create({ name: 1 } as any)).containsErrorMessage({
        name: [
          'name must be shorter than or equal to 255 characters',
          'name must be a string'
        ]
      })
    })

    it('should throw an error if is_active is not a boolean', () => {
      expect(() =>
        Category.create({ name: 'a', is_active: 'a' } as any)
      ).containsErrorMessage({
        is_active: ['is_active must be a boolean value']
      })
    })

    it('should throw an error if created_at is not a date', () => {
      expect(() =>
        Category.create({ name: 'a', created_at: 'a' } as any)
      ).containsErrorMessage({
        created_at: ['created_at must be a Date instance']
      })
    })

    it('should throw an error if updated_at is not a date', () => {
      expect(() =>
        Category.create({ name: 'a', updated_at: null } as any)
      ).containsErrorMessage({
        created_at: ['updated_at must be a Date instance']
      })
    })
  })
})
