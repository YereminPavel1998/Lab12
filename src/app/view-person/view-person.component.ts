import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Person } from '../shared/person.model';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {
  @Input() person: Person;
  @Output() changeP = new EventEmitter<Person>();
  @Output() deleteP = new EventEmitter<number>();
  constructor() {}
  flag=true;
  onEdit(id?, name?, surname?){
    if (!this.flag) {
      let newPerson = new Person(id, name, surname);
      this.changeP.emit(newPerson);
    }
    this.flag=!this.flag;
  }
  onDelete(id){
    this.deleteP.emit(id);
  }
  ngOnInit() {
  }
}