export default interface Response<T> {
  type: string;
  version: number;
  response: T;
}
