import { TaskComponent } from './task/task.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MdCheckboxModule, MdButtonModule, MdIconModule, MdInputModule, MdCardModule, MdListModule, MdListItem } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, QueryList, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel, ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdCheckboxModule,
        MdButtonModule,
        MdIconModule,
        MdInputModule,
        MdCardModule,
        FormsModule,
        MdListModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        TaskComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'MsBit todo app'`, async(() => {
    expect(app.title).toEqual('MsBit todo app');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('MsBit todo app');
  }));
  it('should render input control', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const taskInput: HTMLElement = compiled.querySelector('#taskInput');
    expect(taskInput).not.toBeNull();
  }));
  it('should render add button', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const addTaskBtn: HTMLElement = compiled.querySelector('#addTaskBtn');
    expect(addTaskBtn).not.toBeNull();
    expect(addTaskBtn.innerText).toContain('Add Task');
  }));
  it('click on add button will add new task', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let tasks: HTMLElement[] = compiled.querySelectorAll('.tasks');
    const taskInput: HTMLInputElement = compiled.querySelector('#taskInput');
    expect(tasks.length).toBe(0);
    const addTaskBtn: HTMLElement = compiled.querySelector('#addTaskBtn');
    app.taskInput = 'test';
    fixture.detectChanges();
    addTaskBtn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.tasks.length).toBe(1);
      tasks = compiled.querySelectorAll('.taskContent');
      expect(tasks.length).toBe(1);
      expect(tasks[0].innerText).toContain('test');
    });
  }));
  it('should add task only with content', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const addTaskBtn: HTMLElement = compiled.querySelector('#addTaskBtn');
    let tasks: HTMLElement[] = compiled.querySelectorAll('.tasks');
    addTaskBtn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.tasks.length).toBe(0);
    });
  }));
  it('should hide deleted tasks', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let tasks: HTMLElement[] = compiled.querySelectorAll('.tasks');
    const taskInput: HTMLInputElement = compiled.querySelector('#taskInput');
    expect(tasks.length).toBe(0);
    const addTaskBtn: HTMLElement = compiled.querySelector('#addTaskBtn');
    app.taskInput = 'test1';
    fixture.detectChanges();
    addTaskBtn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.tasks.length).toBe(1);
      tasks = compiled.querySelectorAll('.tasks');
      expect(tasks.length).toBe(1);
      const deleteBtn: HTMLButtonElement = compiled.querySelector('.deleteTask');
      deleteBtn.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(tasks[0].offsetHeight).toBe(0);
        expect(tasks[0].offsetWidth).toBe(0);
      });
    });
  }));
  it('should clear input after task was added', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let tasks: HTMLElement[] = compiled.querySelectorAll('.tasks');
    let taskInput: HTMLInputElement = compiled.querySelector('#taskInput');
    expect(tasks.length).toBe(0);
    const addTaskBtn: HTMLElement = compiled.querySelector('#addTaskBtn');
    app.taskInput = 'test';
    fixture.detectChanges();
    addTaskBtn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      taskInput = compiled.querySelector('#taskInput');
      expect(taskInput.value).toBe('');
    });
  }));
  it('should add task when user push enter button', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const tasks: HTMLElement[] = compiled.querySelectorAll('.tasks');
    const taskInput: HTMLInputElement = compiled.querySelector('#taskInput');
    expect(tasks.length).toBe(0);
    app.taskInput = 'test';
    fixture.detectChanges();
    const spy = spyOn(app, 'addTask');
    const eventKey = new KeyboardEvent('keypress', { 'key': 'Enter' });
    taskInput.focus();
    console.log('keyup');
    document.dispatchEvent(eventKey);
    debugger;
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledWith('test');
    });
  }));
});
