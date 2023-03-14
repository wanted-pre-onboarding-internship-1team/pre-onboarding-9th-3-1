import { instance } from './instance';
import { GetMockResponse } from './types/mock';

export default class MockService {
  constructor(private api: typeof instance);
  getMockDatas = async () => this.api.get<GetMockResponse>('/data/mock.json');
}
