/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { DeletedComponent } from './deleted.component';

describe('DeletedComponent', () => {
  let component: DeletedComponent;
  let fixture: ComponentFixture<DeletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
