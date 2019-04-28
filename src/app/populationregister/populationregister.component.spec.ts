import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationregisterComponent } from './populationregister.component';

describe('PopulationregisterComponent', () => {
  let component: PopulationregisterComponent;
  let fixture: ComponentFixture<PopulationregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
