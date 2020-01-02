import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageconstructionComponent } from './app-pageconstruction.component';

describe('AppPageconstructionComponent', () => {
  let component: AppPageconstructionComponent;
  let fixture: ComponentFixture<AppPageconstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPageconstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPageconstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
