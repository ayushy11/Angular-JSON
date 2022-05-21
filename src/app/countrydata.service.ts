import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountrydataService {
  data: { name: string; img: string } = { name: '', img: '' };

  dataChange: Subject<{ name: string; img: string }> = new Subject<{
    name: string;
    img: string;
  }>();

  constructor() {
    this.dataChange.subscribe((value) => {
      this.data = value;
    });
  }

  setData(flagData: any) {
    let newData = {
      name: flagData.country,
      img: flagData.countryInfo.flag,
    };
    this.dataChange.next(newData);
  }

  // getData() {
  //   return this.data;
  // }
}
