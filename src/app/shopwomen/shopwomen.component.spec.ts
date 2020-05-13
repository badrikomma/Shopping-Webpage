import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopwomenComponent } from './shopwomen.component';

describe('ShopwomenComponent', () => {
  let component: ShopwomenComponent;
  let fixture: ComponentFixture<ShopwomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopwomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopwomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
