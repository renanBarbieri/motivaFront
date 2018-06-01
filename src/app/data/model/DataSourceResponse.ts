export default class DataSourceResponse<T> {

  constructor(public status: String, public result: T) {
  }
}
