import { Entity } from '@/shared/domain/entity'

export class NotFoundError extends Error {
  constructor(id: any[] | any, entityCalss: new (...args: any[]) => Entity) {
    const idsMessage = Array.isArray(id) ? id.join(', ') : id

    super(`${entityCalss.name} not found using ID ${idsMessage}`)

    this.name = 'NotFoundError'
  }
}
