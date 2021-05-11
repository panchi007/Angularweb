import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  constructor(private _http: HttpClient) { }

  conversor(desde: string, hasta: string, cantidad: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-key": "146f70b91emsh8530647d4f568dbp1b2c9djsn9228a3fd26bd",
        "x-rapidapi-host": "community-neutrino-currency-conversion.p.rapidapi.com",
      }),
      params: {
      }
    }

    let data = {
      "to-type": desde,
      "from-type": hasta,
      "from-value": cantidad
    }

    console.log(data)
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", data, httpOptions)

  }
}
