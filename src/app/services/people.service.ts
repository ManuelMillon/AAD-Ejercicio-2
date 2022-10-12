import { Injectable } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { mainModule } from 'process';

export interface People{
  idPeople: number; 
  firstName: string;
  nickName: string; 
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

public person: People[] = [
  {
    idPeople: 0,
    firstName: 'Manolo',
    nickName: 'Manolito',
    description: ''
  },
  {
    idPeople: 1,
    firstName: 'Javi',
    nickName: 'Javito',
    description: ''
  },
  {
    idPeople: 2,
    firstName: 'Santos',
    nickName: 'Santito',
    description: ''
  },
  {
    idPeople: 3,
    firstName: 'Sergio',
    nickName: 'Sergito',
    description: ''
  },
  {
    idPeople: 4,
    firstName: 'Salomón',
    nickName: 'Salomoncito',
    description: ''
  },

]


  constructor() { }

  public getPeople(): People[]{
    return this.person;
  }

  public getPeopleById(id:number): People{
    return this.person[id];
  }
}
