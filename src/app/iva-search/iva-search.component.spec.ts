import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvaSearchComponent } from './iva-search.component';

describe('IvaSearchComponent', () => {
  let component: IvaSearchComponent;
  let fixture: ComponentFixture<IvaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvaSearchComponent ]
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
