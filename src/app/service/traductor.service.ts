import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  constructor(private _http: HttpClient) { }

  traductor(source: string, target: string, params: string): Observable<any> {

    // input: string, source: string, target: string
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-key": "146f70b91emsh8530647d4f568dbp1b2c9djsn9228a3fd26bd",
        "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
      }),
      params: {
      }

    };

    return this._http.get("https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source=" + source + "&target=" + target + "&input=" + params, httpOptions);

  }

}

//return this._http.get("https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source=en&target=es&input=" + params, httpOptions);