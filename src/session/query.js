import ObservableArray from '../collections/observable_array';  

export default class Query extends ObservableArray {
  
  constructor(session, type, params) {
    this.session = session;
    this._type = type;
    this._params = params;
    super();
  }
  
  get params() {
    return this._params;
  }
  
  get type() {
    return this._type;
  }
  
  invalidate() {
    return this.session.invalidateQuery(this);
  }
  
  refresh() {
    return this.session.refreshQuery(this);
  }
  
}
