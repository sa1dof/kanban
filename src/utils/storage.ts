import store from "store2";

export const Store = {
  get: (key: string) => store.get(key),
  set: (key: string, data: string) => store.set(key, data)
}
