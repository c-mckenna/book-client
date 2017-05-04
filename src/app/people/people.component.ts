import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [PeopleService]
})
export class PeopleComponent implements OnInit {

  people = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(
      (people: any) => this.people = people,
      (error) => console.log(error)
    );
  }

  onSubmit(form: any) {
    this.peopleService.savePerson(form).subscribe(
      (person: any) => this.people.push(person),
      (error) => console.log(error)
    );
  }

}
