import { People, PeopleService } from './../services/people.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private people: PeopleService) {}
  getTarjetas(): Tarjeta[] {
    return this.people.getTarjetas();
  }
}
