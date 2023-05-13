import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasdaqScoreComponent } from './nasdaq-score.component';

describe('NasdaqScoreComponent', () => {
  let component: NasdaqScoreComponent;
  let fixture: ComponentFixture<NasdaqScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasdaqScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasdaqScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
