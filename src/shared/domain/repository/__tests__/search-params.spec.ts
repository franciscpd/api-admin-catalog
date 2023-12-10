import { SearchParams } from '../search-params'

type Arrange = {
  value: string | null | undefined | number | boolean | object
  expected: string | null | number
}

describe('SearchParams unit tests', () => {
  it('should page properly', () => {
    const params = new SearchParams()

    expect(params.page).toBe(1)

    const arrange: Arrange[] = [
      { value: null, expected: 1 },
      { value: undefined, expected: 1 },
      { value: '', expected: 1 },
      { value: 'fake', expected: 1 },
      { value: 0, expected: 1 },
      { value: -1, expected: 1 },
      { value: 5.5, expected: 1 },
      { value: true, expected: 1 },
      { value: false, expected: 1 },
      { value: {}, expected: 1 },
      { value: 1, expected: 1 },
      { value: 2, expected: 2 }
    ]

    arrange.forEach((item) => {
      expect(new SearchParams({ page: item.value as any }).page).toBe(
        item.expected
      )
    })
  })

  it('should per_page properly', () => {
    const params = new SearchParams()

    expect(params.per_page).toBe(15)

    const arrange: Arrange[] = [
      { value: null, expected: 15 },
      { value: undefined, expected: 15 },
      { value: '', expected: 15 },
      { value: 'fake', expected: 15 },
      { value: 0, expected: 15 },
      { value: -1, expected: 15 },
      { value: 5.5, expected: 15 },
      { value: true, expected: 15 },
      { value: false, expected: 15 },
      { value: {}, expected: 15 },
      { value: 1, expected: 1 },
      { value: 2, expected: 2 }
    ]

    arrange.forEach((item) => {
      expect(new SearchParams({ per_page: item.value as any }).per_page).toBe(
        item.expected
      )
    })
  })

  it('should sort properly', () => {
    const params = new SearchParams()

    expect(params.sort).toBe(null)

    const arrange: Arrange[] = [
      { value: null, expected: null },
      { value: undefined, expected: null },
      { value: '', expected: null },
      { value: 'fake', expected: 'fake' },
      { value: 0, expected: '0' },
      { value: -1, expected: '-1' },
      { value: 5.5, expected: '5.5' },
      { value: true, expected: 'true' },
      { value: false, expected: 'false' },
      { value: {}, expected: '[object Object]' }
    ]

    arrange.forEach((item) => {
      expect(new SearchParams({ sort: item.value as any }).sort).toBe(
        item.expected
      )
    })
  })

  it('should sort_dir properly', () => {
    const params = new SearchParams()

    expect(params.sort_dir).toBeNull()

    const arrange: Arrange[] = [
      { value: null, expected: 'asc' },
      { value: undefined, expected: 'asc' },
      { value: '', expected: 'asc' },
      { value: 'fake', expected: 'asc' },
      { value: 0, expected: 'asc' },
      { value: -1, expected: 'asc' },
      { value: 5.5, expected: 'asc' },
      { value: true, expected: 'asc' },
      { value: false, expected: 'asc' },
      { value: {}, expected: 'asc' },
      { value: 'asc', expected: 'asc' },
      { value: 'desc', expected: 'desc' },
      { value: 'ASC', expected: 'asc' },
      { value: 'DESC', expected: 'desc' }
    ]

    arrange.forEach((item) => {
      expect(
        new SearchParams({ sort: 'field', sort_dir: item.value as any })
          .sort_dir
      ).toBe(item.expected)
    })
  })

  it('should filter properly', () => {
    const params = new SearchParams()

    expect(params.filter).toBeNull()

    const arrange: Arrange[] = [
      { value: null, expected: null },
      { value: undefined, expected: null },
      { value: '', expected: null },
      { value: 'fake', expected: 'fake' },
      { value: 0, expected: '0' },
      { value: -1, expected: '-1' },
      { value: 5.5, expected: '5.5' },
      { value: true, expected: 'true' },
      { value: false, expected: 'false' },
      { value: {}, expected: '[object Object]' },
      { value: 'field', expected: 'field' }
    ]

    arrange.forEach((item) => {
      expect(new SearchParams({ filter: item.value as any }).filter).toBe(
        item.expected
      )
    })
  })
})
