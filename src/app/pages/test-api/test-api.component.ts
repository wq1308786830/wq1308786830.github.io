import { Component, OnInit } from '@angular/core';
import {TestService} from '../../services/test.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss']
})
export class TestApiComponent implements OnInit {
  public data: any;

  constructor(private service: TestService) {
    this.data = {};
  }

  ngOnInit() {
    this.getTestData();
  }

  getTestData(): void {
    this.service.test()
      .subscribe(data => {
        this.data = data;
      }, error2 => {
        console.log(error2);
      });
  }

}
