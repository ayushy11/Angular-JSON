import { Component, OnInit } from '@angular/core';

import { CountrydataService } from '../countrydata.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
})
export class CountryDetailsComponent implements OnInit {
  // newData: { name: string; img: string } = this.newCountryService.getData();
  displayName: string = '';
  displayImg: string = '';

  constructor(private newCountryService: CountrydataService) {
    this.newCountryService.dataChange.subscribe((value) => {
      console.log(value);
      this.displayName = value.name;
      this.displayImg = value.img;
      // return this.data;
    });
  }

  // get data(): { name: string; img: string } {
  //   let newData =  this.newCountryService.data;
  //   console.log('zz',newData);
  //   return newData;
  // }

  ngOnInit(): void {}
}
