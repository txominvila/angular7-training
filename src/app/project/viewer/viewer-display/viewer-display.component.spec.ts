import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerDisplayComponent } from './viewer-display.component';

describe('ViewerDisplayComponent', () => {
  let component: ViewerDisplayComponent;
  let fixture: ComponentFixture<ViewerDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
