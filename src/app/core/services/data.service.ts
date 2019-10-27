import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  setData(data: any) {
    window.localStorage.setItem('local_data', data);
  }

  getData() {
    return window.localStorage.getItem('local_data');
  }

  destroyData() {
    window.localStorage.removeItem('local_data');
  }
}
