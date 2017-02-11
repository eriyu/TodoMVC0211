import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {Response, Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class DataService {

  url:string = 'https://jsonbin.org/eriyu/todos';

  constructor(private http: Http) { }

  getAuthorizationHeader() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('authorization', 'token ff4668d5-6b2e-4005-8e24-94857b56471d');
    let options: RequestOptions = new RequestOptions({ headers: headers });
    return options;
  }

  saveTodos(todos): Observable<any[]> {
    return this.http.post('/me/todos',todos,this.getAuthorizationHeader())
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getTodos(): Observable<any[]> {
    return this.http.get('/me/todos',this.getAuthorizationHeader())
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
