import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextFunctionService {

  private readonly apiUrl = 'http://localhost:7129/api/httpget';

  constructor(private http: HttpClient) { }

  getText(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
