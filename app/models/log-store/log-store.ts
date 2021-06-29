import { getSnapshot, Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
const URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-j5PJRX4f6Ykaa2SrlVbJeiqGk0cRAzfUQ&usqp=CAU'
const image = types.model({
  link: types.string
})
const logData = types.model({
  name: types.string,
  Licence: types.string,
  job: types.string,
  company: types.string,
  category: types.string,
  task: types.string,
  description: types.string,
  startDate: types.maybe(types.string),
  endDate: types.maybe(types.string),
  startTime: types.maybe(types.string),
  endTime: types.maybe(types.string),
  image: types.maybe(types.array(image))
})

export const LogStoreModel = types
  .model("LogStore")
  .props({
    logs: types.optional(types.array(logData), []),
    images: types.optional(types.array(image), [{ link: URL }]),
    extraimages: types.optional(types.array(image), [{ link: URL }]),
    categories: types.optional(types.string, 'Select Category'),
    tasks: types.optional(types.string, 'Select Tasks'),
    descriptions: types.optional(types.string, 'Select Description'),
    companies: types.optional(types.string, 'Select Company'),
    jobs: types.optional(types.string, 'Select Job location'),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setCompany(data) {
      self.companies = data
    },
    setJob(data) {
      self.jobs = data
    },
    setTask(data) {
      self.tasks = data
    },
    setCategory(data) {
      self.categories = data
    },
    setDescription(data) {
      self.descriptions = data;
    },
    addLog(data) {
      let datatoadd = {
        name: 'Shance barwick',
        Licence: 'RVHJD8CV8',
        job: data.job,
        company: data.company,
        category: data.category,
        task: data.task,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        startTime: data.startTime,
        endTime: data.endTime,
        image: getSnapshot(self.images)
      }
      self.logs.push(datatoadd)
      console.log(self.logs)
      this.onAddLog()
    },
    deleteLog(data) {
      let array = self.logs;
      array.splice(data, 1);
      self.logs = array;
    },
    onAddLog() {
      self.companies = 'Select Main Company';
      self.jobs = 'Select Job location'
      console.log(self.images)
      self.descriptions = '';
      self.tasks = '';
      self.categories = '';
      self.images = getSnapshot(self.extraimages);
    },
    onaddfromshift() {
      self.descriptions = '';
      self.tasks = '';
      self.categories = '';
      self.images = getSnapshot(self.extraimages);
    },
    addImage(data) {
      self.images.push(data)
    },
    deleteImage(data) {
      let array = self.images;
      array.splice(data, 1);
      self.images = array;
    },
    setForEdit(data) {
      console.log('setting up.............')
      self.tasks = data.task;
      self.categories = data.category;
      self.descriptions = data.description;
      self.images = getSnapshot(data.image)
      console.log(data.image)
    },
    editLog(data) {
      console.log("----" + data.category + ' ' + data.task)
      let obj = {
        name: data.name,
        Licence: data.Licence,
        job: data.job,
        company: data.company,
        category: data.category,
        task: data.task,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        startTime: data.startTime,
        endTime: data.endTime,
        image: getSnapshot(self.images)
      }
      console.log(obj)
      console.log(self.images)
      let array = self.logs
      array.splice(data.ind, 1, obj);
      self.logs = array
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type LogStoreType = Instance<typeof LogStoreModel>
export interface LogStore extends LogStoreType { }
type LogStoreSnapshotType = SnapshotOut<typeof LogStoreModel>
export interface LogStoreSnapshot extends LogStoreSnapshotType { }
export const createLogStoreDefaultModel = () => types.optional(LogStoreModel, {})
