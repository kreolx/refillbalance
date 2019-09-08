import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RefillFormComponent } from './refill-form.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RefillService } from 'src/app/services/refill.service';
import { FormBuilder } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

describe('RefillFormComponent', () => {
  let component: RefillFormComponent;
  let fixture: ComponentFixture<RefillFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ClarityModule, ReactiveFormsModule ],
      declarations: [ RefillFormComponent ],
      providers: [
        { provide: Router, useClass: class { navigate = jasmine.createSpyObj('Router', ['navigateByUrl']); }},
        { provide: ActivatedRoute, useClass: class { navigate = jasmine.createSpy('navigate'); }},
        RefillService,
        FormBuilder
      ]
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
