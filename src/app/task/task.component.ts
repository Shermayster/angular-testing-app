import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Input } from '@angular/core/';
import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = {content:'', status: ''};
  @ViewChild('taskContent') taskContent: ElementRef; 
  constructor() { }

  ngOnInit() {
  }
  
  completeTask(complete: boolean) {
    console.log('complete', complete);
    this.taskContent.nativeElement.classList.add('completed');
    this.task.status = "completed";
  }

  deleteTask() {
    this.taskContent.nativeElement.classList.add('deleted');
    this.task.status = "deleted";
  }
}
