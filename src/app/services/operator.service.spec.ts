import { TestBed, getTestBed } from '@angular/core/testing';

import { OperatorService } from './operator.service';
import { Injector } from '@angular/core';
import IOperator from '../models/IOperator';

describe('OperatorService', () => {
  let service: OperatorService;
  let injector: Injector;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OperatorService
      ]
    });
    injector = getTestBed();
  });
  beforeEach(() => {
    service = injector.get(OperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return observable list operators', () => {
    service.getOperatorList().subscribe((list: Array<IOperator>) => {
      expect(list.length).toBeGreaterThan(0);
    });
  })
});
