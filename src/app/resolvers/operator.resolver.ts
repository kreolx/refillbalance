import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import IOperator from '../models/IOperator';
import { OperatorService } from '../services/operator.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class OperatorResolver implements Resolve<Array<IOperator>> {
    constructor(private operatorService: OperatorService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<IOperator>> {
        return this.operatorService.getOperatorList();
    }
}