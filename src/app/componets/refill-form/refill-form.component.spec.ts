import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RefillFormComponent } from './refill-form.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RefillService } from 'src/app/services/refill.service';
import { FormBuilder } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RefillFormComponent', () => {
  let component: RefillFormComponent;
  let fixture: ComponentFixture<RefillFormComponent>;
  const routeParams = {
    id: 1,
    name: 'Мегафон'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ClarityModule, ReactiveFormsModule, BrowserAnimationsModule ],
      declarations: [ RefillFormComponent ],
      providers: [
        { provide: Router,
          useClass: class { navigate = jasmine.createSpyObj('Router', ['navigateByUrl']);}
        },
        { provide: ActivatedRoute,
          useClass: class { navigate = jasmine.createSpyObj('ActivatedRoute', ['navigateByUrl']); },
          useValue: {params: of(routeParams)}
        },
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
