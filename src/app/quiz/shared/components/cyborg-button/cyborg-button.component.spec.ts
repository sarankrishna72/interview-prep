/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CyborgButtonComponent } from './cyborg-button.component';

describe('CyborgButtonComponent', () => {
  let component: CyborgButtonComponent;
  let fixture: ComponentFixture<CyborgButtonComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ CyborgButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyborgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
