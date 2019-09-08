import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillFormComponent } from './refill-form.component';

describe('RefillFormComponent', () => {
  let component: RefillFormComponent;
  let fixture: ComponentFixture<RefillFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefillFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
