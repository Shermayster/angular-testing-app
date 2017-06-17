import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {


  tasks: Task[] = [];
  taskInput: String = '';

  addTask(taskValue: string) {
    console.log('click');
    if (taskValue) {
      const newTask: Task = {
        content: taskValue,
        completed: false,
        deleted: false
      };
      this.tasks.push(newTask);
      this.taskInput = '';
    }
  }
}
