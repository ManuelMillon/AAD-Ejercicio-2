import { Person } from './../models/person';
import { PeopleService, People } from './../services/people.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

}

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss'],
})
export class TarjetaComponent implements OnInit {
  public person: People;


  constructor(
    private : PeopleService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.person = this.person.getPeopleById(parseInt(id, 0));

  }

}
