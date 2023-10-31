import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewphotoComponent } from './previewphoto.component';

describe('PreviewphotoComponent', () => {
  let component: PreviewphotoComponent;
  let fixture: ComponentFixture<PreviewphotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewphotoComponent]
    });
    fixture = TestBed.createComponent(PreviewphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
