import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OperatorComponent } from './operator.component';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import IOperator from '../../models/IOperator';

describe('OperatorComponent', () => {
  let component: OperatorComponent;
  let fixture: ComponentFixture<OperatorComponent>;
  const operators: Array<IOperator> = [{id: 1, name: 'Мегафон'},
  {id: 2, name: 'МТС'},
  {id: 3, name: 'Билайн'},
  {id: 4, name: 'Yota'},
  {id: 5, name: 'Tele2'}];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [
        { provide: ActivatedRoute,
          useClass: class { navigate = jasmine.createSpyObj('ActivatedRoute', ['navigateByUrl']); },
          useValue: {data: of(operators)}
        }
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
