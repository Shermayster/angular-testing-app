import { TaskComponent } from './task/task.component';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MdCheckboxModule, MdButtonModule, MdIconModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let fixture;
  let app;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdCheckboxModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdInputModule,
        MdIconModule
      ],
      declarations: [
        AppComponent,
        TaskComponent
      ],
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
    taskInput.value = 'test';
    fixture.detectChanges();
    addTaskBtn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.tasks.length).toBe(1);
      tasks = compiled.querySelectorAll('.tasks');
      expect(tasks.length).toBe(1);
      expect(tasks[0].innerText).toContain('test');
    });
  }));
});
