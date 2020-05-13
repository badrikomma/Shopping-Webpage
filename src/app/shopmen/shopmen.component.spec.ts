import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopmenComponent } from './shopmen.component';

describe('ShopmenComponent', () => {
  let component: ShopmenComponent;
  let fixture: ComponentFixture<ShopmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
