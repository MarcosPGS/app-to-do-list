import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

  taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');
  constructor() { }
  
  ngOnInit(): void {
  }
  ngDoCheck(): void {
   this.setLocalStorate();
  }

  setEmitItemTasklist(event: string): void {
      if (event !== '') {
        this.taskList.push({task: event, checked: false});
      };
  }

  deleteIntemTaskList(event: number): void {
    this.taskList.splice(event, 1);
  }
  deleteAlltaskList(){
    const confirm = window.confirm('Você deseja deletar tudo?');
    if (confirm) {
      this.taskList = [];
    }
  }

  validationIpunt(event: string, index: number): void {
    if (!event.length) {
      const confirm = window.confirm('Task está vazia, deseja Deletar ?');

      if (confirm) {
        this.deleteIntemTaskList(index);
      }
    }
  }

  setLocalStorate(): void {
    if (this.taskList) {
      this.taskList.sort((first, last) =>Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
