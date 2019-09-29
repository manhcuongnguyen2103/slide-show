import VisaStore from './VisaStore'

class RootStore {
    constructor() {
        this.VisaStore = new VisaStore(this)
  }
}

export default RootStore