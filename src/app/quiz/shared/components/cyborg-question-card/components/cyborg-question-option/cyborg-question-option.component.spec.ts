/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CyborgQuestionOptionComponent } from './cyborg-question-option.component';

describe('CyborgQuestionOptionComponent', () => {
  let component: CyborgQuestionOptionComponent;
  let fixture: ComponentFixture<CyborgQuestionOptionComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ CyborgQuestionOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyborgQuestionOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
