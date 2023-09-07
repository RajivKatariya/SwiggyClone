import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddisplayComponent } from './fooddisplay.component';

describe('FooddisplayComponent', () => {
  let component: FooddisplayComponent;
  let fixture: ComponentFixture<FooddisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooddisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooddisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
