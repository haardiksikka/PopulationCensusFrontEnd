import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverNavBarComponent } from './approver-nav-bar.component';

describe('ApproverNavBarComponent', () => {
  let component: ApproverNavBarComponent;
  let fixture: ComponentFixture<ApproverNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproverNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
