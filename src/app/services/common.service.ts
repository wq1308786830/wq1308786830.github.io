import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';

@Injectable()
export class CommonService {

  contentType = 'application/json';

  public apiTest = 'http://localhost:8080/api';
  public apiHost = 'http://localhost:3000/api';

  constructor(public http: Http, public router: Router) { }

  basePost(url: string, body: any): Observable<any> {
    const headers = new Headers({'Content_Type': this.contentType});
    const options = new RequestOptions({headers: headers});
    const app_token = localStorage.getItem('app_token') || '';
    if (!body) {
      body = {token: app_token};
    } else {
      body['token'] = app_token;
    }

    return this.http.post(`${this.apiHost}${url}`, body, options)
      .map(resp => this.extractData(resp))
      .catch(err => this.handleErr(err));
  }

  extractData(resp: Response): void {
    const body = resp.json();
    if (body['status'] === '1') {
      return body['data'];
    } else if (body['status'] === '0') {
      throw new Error(body['error']);
    } else if (body['status'] === '001') {
      alert('未登录');
      this.router.navigate(['/login']);
      throw new Error(body['error']);
    } else {
      throw new Error('未确定的状态');
    }
  }

  handleErr(err: Response | any): Observable<any> {
    let errMsg: string;
    if (err instanceof Response) {
      const body = err.json() || '';
      const error = body['error'] || JSON.stringify(body);
      errMsg = `${err['status']} - ${err['statusText'] || '' } ${error}`
    } else {
      errMsg = err['message'] ? err['message'] : err.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
