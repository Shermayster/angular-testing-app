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
  @Input() task: Task = {content: '', completed: false, deleted: false };
  @ViewChild('taskContent') taskContent: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  deleteTask() {
    this.task.deleted = true;
  }
}
