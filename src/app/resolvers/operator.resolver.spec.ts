import { TestBed, getTestBed, inject } from "@angular/core/testing";
import { OperatorService } from '../services/operator.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { OperatorResolver } from './operator.resolver';
import { Injector } from '@angular/core';

describe('OperatorResolver service test', () => {
    let resolver: OperatorResolver;
    let route: ActivatedRouteSnapshot;
    let injector: Injector;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ 
                OperatorResolver,
                { provide: Router, useClass: class {navigate = jasmine.createSpy("navigate");}}, 
            ]
        });
        route = new ActivatedRouteSnapshot();
        injector = getTestBed();
    });
    beforeEach(() => {
        resolver = injector.get(OperatorResolver);
    });

    it('should return operators list', inject([OperatorResolver], (service: OperatorService) => {
        resolver.resolve(route, null).subscribe(data => {
            expect(data.length).toBeGreaterThan(0);
        });
    }));
});