import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCafes } from './my-cafes';

describe('MyCafes', () => {
  let component: MyCafes;
  let fixture: ComponentFixture<MyCafes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCafes],
    }).compileComponents();

    fixture = TestBed.createComponent(MyCafes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
