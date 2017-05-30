import { Component } from '@angular/core';
import { Task } from './task/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MsBit todo app';
  tasks: Task[] = [];

  addTask(taskValue: string) {
    if (taskValue) {
      const newTask: Task = {
        content: taskValue,
        completed: false,
        deleted: false
      };
      this.tasks.push(newTask);
    }
  }
}
