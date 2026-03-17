/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CyborgTextComponent } from './cyborg-text.component';

describe('CyborgTextComponent', () => {
  let component: CyborgTextComponent;
  let fixture: ComponentFixture<CyborgTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyborgTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyborgTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
