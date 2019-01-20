import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()

export class CommonService {
  
  private baseUrl = "http://localhost:3000";
  constructor(private http: Http) { }

  public getMessage(): Observable<any> {
    return this.http.get(this.baseUrl)
      .pipe(map((response: Response) => response.json()));
  }
}
