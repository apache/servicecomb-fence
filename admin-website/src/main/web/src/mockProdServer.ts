//  mockProdServer.ts
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import index from './mock/index';

export function setupProdMockServer() {
  createProdMockServer([...index]);
}
