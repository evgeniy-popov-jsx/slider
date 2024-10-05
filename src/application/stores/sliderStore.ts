import { makeAutoObservable } from 'mobx';

class SliderStore {
  
  constructor () {
    makeAutoObservable(this);
  }

}

export const sliderStore = new SliderStore();
