import { EventEmitter } from 'events'

class BusinessStore extends EventEmitter {
  constructor() {
    super()
    this.businesses = [
      {
        id: 1,
        name: "Miles",
      },
      {
        id: 2,
        name: "La Lupe",
      }
    ]
  }

  getAll() {
    return this.businesses
  }
}

const businessStore = new BusinessStore()

export default businessStore
