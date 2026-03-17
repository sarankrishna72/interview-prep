/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CyborgProgressbarComponent } from './cyborg-progressbar.component';

describe('CyborgProgressbarComponent', () => {
  let component: CyborgProgressbarComponent;
  let fixture: ComponentFixture<CyborgProgressbarComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ CyborgProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyborgProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
