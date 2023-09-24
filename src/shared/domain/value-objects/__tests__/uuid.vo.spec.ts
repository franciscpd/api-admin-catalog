import { InvalidUuidError, Uuid } from '../uuid.vo'

const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')

describe('UUID unit tests', () => {
  it('should throw an error if an invalid UUID is provided', () => {
    const invalidUuid = 'invalid-uuid'

    expect(() => new Uuid(invalidUuid)).toThrow(InvalidUuidError)
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  it('should create a UUID with a valid UUID', () => {
    const validUuid = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'

    const uuid = new Uuid(validUuid)

    expect(uuid.id).toBe(validUuid)
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })

  it('should create a UUID with a valid UUID if no UUID is provided', () => {
    const uuid = new Uuid()

    expect(uuid.id).toBeDefined()
    expect(validateSpy).toHaveBeenCalledTimes(1)
  })
})
