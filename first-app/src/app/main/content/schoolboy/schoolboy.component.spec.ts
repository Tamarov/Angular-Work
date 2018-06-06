import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolboyComponent } from './schoolboy.component';

describe('SchoolboyComponent', () => {
  let component: SchoolboyComponent;
  let fixture: ComponentFixture<SchoolboyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolboyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
