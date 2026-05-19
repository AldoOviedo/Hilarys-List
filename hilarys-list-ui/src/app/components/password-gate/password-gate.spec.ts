import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGate } from './password-gate';

describe('PasswordGate', () => {
  let component: PasswordGate;
  let fixture: ComponentFixture<PasswordGate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordGate],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordGate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
