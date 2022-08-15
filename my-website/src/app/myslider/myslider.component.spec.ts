import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysliderComponent } from './myslider.component';

describe('MysliderComponent', () => {
  let component: MysliderComponent;
  let fixture: ComponentFixture<MysliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
