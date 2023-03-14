import { instance } from './instance';
import MockService from './mockService';

const mockService = new MockService(instance);

export const api = { mock: mockService };
