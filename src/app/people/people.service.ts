import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PeopleService {

  constructor(private http: Http) {}

  savePerson(person: any) {
    return this.http.post('http://10.0.0.102:8080/people', person)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  getPeople() {
    return this.http.get('http://10.0.0.102:8080/people')
      .map(
        (response: Response) => {
          return response.json()._embedded.people;
        }
      );
  }

}
