import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-fields'
import { EntityValidationError } from '@/shared/domain/validators/validation.error'
import { FieldsErrors } from '@/shared/domain/validators/validator-fields-interface'

type Expected =
  | {
      validator: ClassValidatorFields<any>
      data: any
    }
  | (() => any)

expect.extend({
  containsErrorMessage(expected: Expected, received: FieldsErrors) {
    if (typeof expected === 'function') {
      try {
        expected()
        return isValid()
      } catch (e) {
        const error = e as EntityValidationError

        return assertContainsErrorMessage(error.error, received)
      }
    } else {
      const { validator, data } = expected

      const validated = validator.validate(data)

      if (validated) {
        return isValid()
      }

      return assertContainsErrorMessage(validator.errors, received)
    }
  }
})

function assertContainsErrorMessage(
  expected: FieldsErrors,
  received: FieldsErrors
) {
  const isMatch = expect.objectContaining(received).asymmetricMatch(expected)

  return isMatch
    ? isValid()
    : {
        pass: false,
        message: () =>
          `The validation errors not contais ${JSON.stringify(
            received
          )}, Current: ${JSON.stringify(expected)}`
      }
}

function isValid() {
  return {
    pass: true,
    message: () => ''
  }
}
