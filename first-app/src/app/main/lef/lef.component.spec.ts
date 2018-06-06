import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LefComponent } from './lef.component';

describe('LefComponent', () => {
  let component: LefComponent;
  let fixture: ComponentFixture<LefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
