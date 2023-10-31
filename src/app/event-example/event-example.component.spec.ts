import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventExampleComponent } from './event-example.component';

describe('EventExampleComponent', () => {
  let component: EventExampleComponent;
  let fixture: ComponentFixture<EventExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventExampleComponent]
    });
    fixture = TestBed.createComponent(EventExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
