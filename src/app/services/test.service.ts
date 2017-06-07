import { Injectable } from '@angular/core';
import {CommonService} from './common.service';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TestService extends CommonService {

  constructor(public http: Http, public router: Router) {
    super(http, router);
  }

  test(): Observable<any> {
    return super.basePost('', null);
  }
}
