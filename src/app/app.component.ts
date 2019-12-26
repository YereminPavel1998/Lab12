import { Component, OnInit } from '@angular/core';
import { Person } from './shared/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project3';
  persons: Person[] = [];
  ngOnInit() {
    this.persons.push(new Person(1, 'Иван', 'Иванов'));
    this.persons.push(new Person(2, 'Андрей', 'Андреев'));
    this.persons.push(new Person(3, 'Александр', 'Александров'));
    this.persons.push(new Person(4, 'Николай', 'Николаев'));
    this.persons.push(new Person(5, 'Роман', 'Романов'));

  }
  changePersons(person){
    this.persons.splice(this.persons.findIndex(human => human.id == person.id), 1, person);
  }
  deletePersons(id){
    this.persons.splice(this.persons.findIndex(human => human.id == id), 1);
  }
  addPersons(obj){
    let newId;
    if (this.persons.length!=0){
      newId = +this.persons[this.persons.length-1].id +1;
     }
     else {newId=1;}
    this.persons.push(new Person(newId, obj.name_man, obj.surname_man));
  }
}
