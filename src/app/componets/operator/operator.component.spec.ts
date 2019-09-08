import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorComponent } from './operator.component';
import { Router, ActivatedRoute } from '@angular/router';

describe('OperatorComponent', () => {
  let component: OperatorComponent;
  let fixture: ComponentFixture<OperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ActivatedRoute, useClass: class{ navigate = jasmine.createSpy('navigate');}}
      ],
      declarations: [ OperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
