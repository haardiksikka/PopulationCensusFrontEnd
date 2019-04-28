import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestdeclinedComponent } from './requestdeclined.component';

describe('RequestdeclinedComponent', () => {
  let component: RequestdeclinedComponent;
  let fixture: ComponentFixture<RequestdeclinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestdeclinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestdeclinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
