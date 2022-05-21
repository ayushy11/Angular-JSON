import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatCard } from '@angular/material/card';

import { AppComponent } from './app.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CountrydataService } from './countrydata.service';

@NgModule({
  declarations: [
    AppComponent,
    CountryTableComponent,
    CountryListComponent,
    CountryDetailsComponent,
  ],
  imports: [BrowserModule, NoopAnimationsModule, MatCardModule],
  exports: [MatCard],
  providers: [CountrydataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
