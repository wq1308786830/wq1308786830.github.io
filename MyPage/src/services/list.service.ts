import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {App, Platform} from "ionic-angular";
import {Http, RequestOptions, Headers, Response} from "@angular/http";

@Injectable()
export class ListService {

  private baseDomain = 'https://www.easy-mock.com/mock/590180617a878d73716db2d1/mypage/';
  static CONTENT_TYPE: string = "application/x-www-form-urlencoded;charset=utf-8";
  headers = new Headers({'Content-Type': ListService.CONTENT_TYPE});
  options = new RequestOptions({headers: this.headers});

  constructor(private http: Http, public app: App, public platform: Platform) {}

  extractData(response: Response) {
    let body = response.json();

    if (body.status === 1) {
      return body.data;
    }
  }

  basePost(url: string, body: any, options: any): Observable<any> {
    return this.http.post(url, body, options)
      .map(response => this.extractData(response));
  }

  getList(): Observable<Array<{title: string, note: string, icon: string}>> {
    let url = `${this.baseDomain}getList`;
    return this.basePost(url, null, this.options);
  }
}
