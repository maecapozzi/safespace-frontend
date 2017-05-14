import dispatcher from '../dispatcher'

export function createBusiness(name) {
  dispatcher.dispatch({
    type: "CREATE_BUSINESS",
    name,
  })
}