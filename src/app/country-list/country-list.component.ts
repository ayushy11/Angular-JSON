import { Component, OnInit } from '@angular/core';

import { CountryTableComponent } from '../country-table/country-table.component';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
