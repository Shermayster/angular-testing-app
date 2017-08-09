/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCheckboxModule, MdButtonModule, MdIconModule, MdInputModule, MdCardModule, MdListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from '../task/task.component';
import { DeletedComponent } from '../deleted/deleted.component';


describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

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
        ReactiveFormsModule,
      ],
      declarations: [
        TasksComponent,
        TaskComponent,
        DeletedComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

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
    component.taskInput = 'test';
    fixture.detectChanges();
    addTaskBtn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.tasks.length).toBe(1);
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
      expect(component.tasks.length).toBe(0);
    });
  }));
  it('should hide deleted tasks', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let tasks: HTMLElement[] = compiled.querySelectorAll('.tasks');
    const taskInput: HTMLInputElement = compiled.querySelector('#taskInput');
    expect(tasks.length).toBe(0);
    const addTaskBtn: HTMLElement = compiled.querySelector('#addTaskBtn');
    component.taskInput = 'test1';
    fixture.detectChanges();
    addTaskBtn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.tasks.length).toBe(1);
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
    component.taskInput = 'test';
    fixture.detectChanges();
    addTaskBtn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      taskInput = compiled.querySelector('#taskInput');
      expect(taskInput.value).toBe('');
    });
  }));
  it('should add task when user click enter button', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let tasks: HTMLElement[] = compiled.querySelectorAll('.tasks');
    const taskInput: HTMLInputElement = compiled.querySelector('#taskInput');
    expect(tasks.length).toBe(0);
    component.taskInput = 'test';
    fixture.detectChanges();
    const eventKey = new KeyboardEvent('keypress', { 'key': 'Enter' });
    taskInput.focus();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      // compiled.dispatchEvent(eventKey);
      fixture.debugElement.query(By.css('#taskInput')).triggerEventHandler('keyup.enter', null);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        tasks = compiled.querySelectorAll('.tasks');
        expect(tasks.length).toBe(1);
      });
    });
  }));
  xit('should contain deleted task page', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const deletedPageBtn = compiled.querySelector('#deletedTasksBtn');
    expect(deletedPageBtn).not.toBeNull();
  });
  xit('should recieve tasks from server', () => {

  });
});
