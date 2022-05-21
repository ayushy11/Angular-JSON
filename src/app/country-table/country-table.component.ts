import { Component, OnInit } from '@angular/core';

import countriesData from '../countries';

import { CountrydataService } from '../countrydata.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css'],
})
export class CountryTableComponent implements OnInit {
  public countries: any = countriesData;

  constructor(private countryService: CountrydataService) {}

  ngOnInit(): void {}

  onSelect(data: any): void {
    this.countryService.setData(data);
    // console.log(this.countryService.data);
  }
}
