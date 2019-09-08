import { Injectable } from '@angular/core';
import IRefill from '../models/IRefill';
import { Observable, of } from 'rxjs';
import IResponse from '../models/IResponse';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RefillService {

  constructor() { }
  // emulator backend request. Randomly return error or ok response. Delay randomly too.
  refillBalance(request: IRefill): Observable<IResponse> {
    const maxTimeOut = 1500;
    const minTimeOut = 500;
    // this delay time.
    const time = Math.floor(Math.random() * (maxTimeOut - minTimeOut + 1) + minTimeOut);
    const response = {} as IResponse;
    return of(response).pipe(
      delay(time),
      tap(resp => {
        const random = Math.floor(Math.random() * request.amount) + 1;
        if ( random < request.amount / 2) {
          resp.status = 1;
          resp.message = 'Balance is replenished';
        } else {
          resp.status = 0;
          resp.message = `Some error occured. Error code: ${random}.${request.amount / 2}`;
        }
        return resp;
      })
    );
  }
}
