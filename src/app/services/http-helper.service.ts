import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHelper {


  constructor(private http: HttpClient) {

  }

  getSpendTransactions(): Observable<any> {
    const httpOptions = {
      responseType: 'text' as 'text',
    };
    
    return this.http.get(`./assets/data/EPSRCSpendDataJan2015.csv`,
      httpOptions);

  }
}
