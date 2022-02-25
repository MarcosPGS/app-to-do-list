import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {
  @Output() emitItemTasklist = new EventEmitter();
  addItemTaskList: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  submitItemTaskList(): void {
    this.addItemTaskList = this.addItemTaskList.trim();
    if ( this.addItemTaskList) {
      this.emitItemTasklist.emit(this.addItemTaskList);
      this.addItemTaskList = '';
    }
    
  }
}
