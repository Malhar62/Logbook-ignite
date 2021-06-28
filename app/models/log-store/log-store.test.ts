import { LogStoreModel } from "./log-store"

test("can be created", () => {
  const instance = LogStoreModel.create({})

  expect(instance).toBeTruthy()
})
