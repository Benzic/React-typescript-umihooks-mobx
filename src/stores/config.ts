import counterStore from './test/index';
export function createStore() {
  return {
    counterStore
  }
}

export const store = createStore();

export type TStore = ReturnType<typeof createStore>;
