import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvaDetailComponent } from './iva-detail.component.js';
import { describe, beforeEach, it } from 'node:test';

describe('IvaDetailComponent', () => {
  let component: IvaDetailComponent;
  let fixture: ComponentFixture<IvaDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IvaDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
