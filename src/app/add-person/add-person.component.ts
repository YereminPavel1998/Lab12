import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/person.model';
import { isNullOrUndefined, log } from 'util';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  @Output() addP = new EventEmitter<Object>();
  constructor() { }
  onAdd(name, surname){
    if ((name.value!='') && (surname.value!='')) {
      console.log(name.value);
      let man = {
        name_man: name.value,
        surname_man: surname.value
      }
      this.addP.emit(man);
    }
    name.value='';
    surname.value='';
  }
  ngOnInit() {
  }

}