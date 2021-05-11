import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadisticacovidService {

  constructor(private _http: HttpClient) { }


  estadisticacovid(pais: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-key": "146f70b91emsh8530647d4f568dbp1b2c9djsn9228a3fd26bd",
        "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
      }),
      params: {
      }

    };

    return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1/" + pais, httpOptions)

  }

}
