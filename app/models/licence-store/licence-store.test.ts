import { LicenceStoreModel } from "./licence-store"

test("can be created", () => {
  const instance = LicenceStoreModel.create({})

  expect(instance).toBeTruthy()
})
