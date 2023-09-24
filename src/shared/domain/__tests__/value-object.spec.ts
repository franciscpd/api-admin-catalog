import { ValueObject } from '../value-object'

class StringValueObject extends ValueObject {
  constructor(readonly value: string) {
    super()
  }
}

class ComplexValueObject extends ValueObject {
  constructor(
    readonly value: string,
    readonly value2: number
  ) {
    super()
  }
}

describe('ValueObject unit tests', () => {
  describe('should be equals', () => {
    it('when value string is equals', () => {
      const valueObject1 = new StringValueObject('test')
      const valueObject2 = new StringValueObject('test')

      expect(valueObject1.equals(valueObject2)).toBeTruthy()
    })

    it('when value string is equals and value2 number is equals', () => {
      const valueObject1 = new ComplexValueObject('test', 1)
      const valueObject2 = new ComplexValueObject('test', 1)

      expect(valueObject1.equals(valueObject2)).toBeTruthy()
    })
  })

  describe('should not be equals', () => {
    it('when value string is not equals', () => {
      const valueObject1 = new StringValueObject('test')
      const valueObject2 = new StringValueObject('test2')

      expect(valueObject1.equals(valueObject2)).toBeFalsy()
    })

    it('when value string is not equals and value2 number is not equals', () => {
      const valueObject1 = new ComplexValueObject('test', 1)
      const valueObject2 = new ComplexValueObject('test2', 2)

      expect(valueObject1.equals(valueObject2)).toBeFalsy()
    })

    it('when constructor is not equals', () => {
      const valueObject1 = new StringValueObject('test')
      const valueObject2 = new ComplexValueObject('test', 1)

      expect(valueObject1.equals(valueObject2)).toBeFalsy()
    })

    it('when value is null or undefined', () => {
      const valueObject1 = new StringValueObject('test')

      expect(valueObject1.equals(null as any)).toBeFalsy()
      expect(valueObject1.equals(undefined as any)).toBeFalsy()
    })
  })
})
