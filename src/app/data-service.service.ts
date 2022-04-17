import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() {
  }

  private data: any

  public setData(data: any) {
    this.data = data;
  }

  public getData() {
    return this.data;
  }
}
