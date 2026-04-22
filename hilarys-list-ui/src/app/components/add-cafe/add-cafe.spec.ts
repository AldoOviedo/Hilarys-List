import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCafe } from './add-cafe';

describe('AddCafe', () => {
  let component: AddCafe;
  let fixture: ComponentFixture<AddCafe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCafe],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCafe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
