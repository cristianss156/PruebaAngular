import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { IvaComponent } from './iva.component.js';
import { beforeEach, describe, it } from 'node:test';

describe('IvaComponent', () => {
  let component: IvaComponent;
  let fixture: ComponentFixture<IvaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IvaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});