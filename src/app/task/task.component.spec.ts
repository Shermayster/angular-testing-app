import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaskComponent} from './task.component';
import { MdCheckboxModule, MdButtonModule, MdIconModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdCheckboxModule,
        MdButtonModule,
        MdIconModule
      ],
      declarations: [
        TaskComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should show content of the taks', async(() => {
    component.task.content = 'test';
    fixture.detectChanges();
    const taskContent = fixture.nativeElement.querySelector('.taskContent').innerText;
    expect(taskContent).toContain('test');
  }));
  it('should render checkbox', async(() => {
    const taskCheckbox = fixture.nativeElement.querySelector('.taskCheckbox');
    expect(taskCheckbox).not.toBeNull();
  }));
    it('should render delete button', async(() => {
    const deleteTask = fixture.nativeElement.querySelector('.deleteTask');
    expect(deleteTask).not.toBeNull();
  }));
  it('should toggle complete task', async(() => {
    const taskCheckbox = fixture.nativeElement.querySelector('.taskCheckbox');
    taskCheckbox.click();
    fixture.whenStable().then(() => {
      const taskContent: HTMLElement = fixture.nativeElement.querySelector('.taskContent')
      expect(taskContent.classList.contains('completed')).toBeTruthy();
      expect(component.task.status).toBe('completed');
      taskCheckbox.click();
      fixture.whenStable().then(() => {
        expect(taskContent.classList.contains('completed')).toBeFalsy();
        expect(component.task.status).toBe('');
      });
    });
  }));
  it('click on delete button should delete task', () => {
    const deleteTask = fixture.nativeElement.querySelector('.deleteTask');
    deleteTask.click();
    fixture.whenStable().then(() => {
      const taskContent: HTMLElement = fixture.nativeElement.querySelector('.taskContent')
      expect(taskContent.classList.contains('deleted')).toBeTruthy();
      expect(component.task.status).toBe('deleted')
    }) 
  })
});
