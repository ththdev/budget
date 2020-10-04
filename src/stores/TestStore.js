import { observable, action } from "mobx";

export default class TestStore {
  @observable user = false;

  @action setUser = (user) => {
    this.user = user;
  };
}
