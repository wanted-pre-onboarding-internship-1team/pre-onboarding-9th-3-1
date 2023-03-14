import { instance } from './instance';

export default class MockService {
  constructor(private api: typeof instance);
}
