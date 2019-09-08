import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IOperator from '../models/IOperator';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor() { }
  operators: Array<IOperator> = [
    {id: 1, name: 'Мегафон'},
    {id: 2, name: 'МТС'},
    {id: 3, name: 'Билайн'},
    {id: 4, name: 'Yota'},
    {id: 5, name: 'Tele2'}
  ];

  // returns list observable list operators
  getOperatorList(): Observable<Array<IOperator>> {
    return Observable.create(observer => {
      observer.next(this.operators);
      observer.complete();
    });
  }
  getOperatorById(id: number): IOperator {
    return this.operators.filter(d => d.id === id)[0];
  }
}
