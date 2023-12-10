import { SearchResult } from '../search-result'

describe('SearchResult unit tests', () => {
  it('constructor props', () => {
    const baseData = {
      items: ['entity 1', 'entity 2', 'entity 3'] as any,
      total: 4,
      current_page: 1,
      per_page: 2
    }

    const result = new SearchResult({
      ...baseData
    })

    expect(result.toJSON()).toStrictEqual({
      ...baseData,
      last_page: 2
    })
  })

  it('should set last_page = 1 when per_page is greater than total field', () => {
    const baseData = {
      items: ['entity 1', 'entity 2', 'entity 3'] as any,
      total: 4,
      current_page: 1,
      per_page: 15
    }

    const result = new SearchResult({
      ...baseData
    })

    expect(result.last_page).toBe(1)
  })

  it('should last_page prop then total is not a multiple of per_page', () => {
    const baseData = {
      items: [] as any,
      total: 101,
      current_page: 1,
      per_page: 20
    }

    const result = new SearchResult({
      ...baseData
    })

    expect(result.last_page).toBe(6)
  })
})
