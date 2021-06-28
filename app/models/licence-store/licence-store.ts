import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
const licences = [
  { number: 'HLS3ITS8', exp: '05-05-2021', state: 'Victoria', Country: 'Australia', flag: false },
  { number: 'L3BCZ7N5', exp: '22-02-2022', state: 'Queensland', Country: 'Australia', flag: false },
  { number: 'MR3CV94T', exp: '10-10-2021', state: 'Victoria', Country: 'Australia', flag: false },
]

const licenceData = types.model({
  number: types.string,
  exp: types.string,
  state: types.string,
  Country: types.string
});

export const LicenceStoreModel = types
  .model("LicenceStore")
  .props({
    licences: types.optional(types.array(licenceData), licences)
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    updateLicence(data) {
      let obj = {
        number: data.number,
        exp: data.exp,
        state: data.state,
        Country: data.Country,
      }
      let array = [...self.licences];
      array.splice(data.index, 1, obj);
      self.licences = [...array];
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type LicenceStoreType = Instance<typeof LicenceStoreModel>
export interface LicenceStore extends LicenceStoreType { }
type LicenceStoreSnapshotType = SnapshotOut<typeof LicenceStoreModel>
export interface LicenceStoreSnapshot extends LicenceStoreSnapshotType { }
export const createLicenceStoreDefaultModel = () => types.optional(LicenceStoreModel, {})
