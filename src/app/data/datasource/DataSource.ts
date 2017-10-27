
export interface DataSource<T> {
  get(id: String): Promise<T>;
}
