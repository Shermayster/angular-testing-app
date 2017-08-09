
import { DeletedComponent } from './deleted/deleted.component';
import {APP_BASE_HREF, Location} from '@angular/common';
import { Router } from '@angular/router';
import { inject } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/';
import { NgModel, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, DefaultValueAccessor } from '@angular/forms/';
import { TaskComponent } from './task/task.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MdCheckboxModule, MdButtonModule, MdIconModule, MdInputModule, MdCardModule, MdListModule, MdListItem } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, QueryList, Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TasksComponent } from './tasks/tasks.component';
import { AppRoute } from './app-route.routing';
 class RouterStub {
    navigate() {
      return null;
    }
  };
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoute,
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
        RouterTestingModule
          .withRoutes([
            {path: '', component: TasksComponent}
          ])
      ],
      declarations: [
        AppComponent,
        TaskComponent,
        TasksComponent,
        DeletedComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
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
  it('should have router component', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });
});
