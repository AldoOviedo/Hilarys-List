import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HilarysList } from './hilarys-list';

describe('HilarysList', () => {
  let component: HilarysList;
  let fixture: ComponentFixture<HilarysList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HilarysList],
    }).compileComponents();

    fixture = TestBed.createComponent(HilarysList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
