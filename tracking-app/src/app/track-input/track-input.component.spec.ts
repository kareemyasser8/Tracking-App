import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackInputComponent } from './track-input.component';

describe('TrackInputComponent', () => {
  let component: TrackInputComponent;
  let fixture: ComponentFixture<TrackInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
