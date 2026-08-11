import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvaSearchComponent } from './iva-search.component.js';
import { describe, beforeEach, it } from 'node:test';

describe('IvaSearchComponent', () => {
  let component: IvaSearchComponent;
  let fixture: ComponentFixture<IvaSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IvaSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
