import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { State } from '../common/state';
import { Country } from '../common/country';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private httpClient: HttpClient) {}

  baseUrl = 'http://localhost:8082/api/states';

  getAllStates(): Observable<State[]> {
    return this.httpClient
      .get<GetResponseStates>(this.baseUrl)
      .pipe(map((response) => response._embedded.states));
  }

  getStatesByCountryCode(code: string): Observable<State[]> {
    const searchUrl = `/search/findByCountryCode?code=${code}`;
    return this.httpClient
      .get<GetResponseStates>(this.baseUrl + searchUrl)
      .pipe(map((response) => response._embedded.states));
  }

  getAllCountries(): Observable<Country[]> {
    const searchUrl = 'http://localhost:8082/api/countries';

    return this.httpClient
      .get<GetResponseCountries>(searchUrl)
      .pipe(map((response) => response._embedded.countries));
  }

  getCreditCardMonths(startMonth: number): Observable<number[]> {
    let data: number[] = [];

    // bulid an array for 'Month' dropdown list.

    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }

    return of(data);
  }

  getCreditCardYears(): Observable<number[]> {
    let data: number[] = [];

    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 5;

    for (let theYear = startYear; theYear <= endYear; theYear++) {
      data.push(theYear);
    }

    return of(data);
  }
}

interface GetResponseStates {
  _embedded: {
    states: State[];
  };
}

interface GetResponseCountries {
  _embedded: {
    countries: Country[];
  };
}
