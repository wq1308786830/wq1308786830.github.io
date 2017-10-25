import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AdItem} from '../../beans/beans';
import {AdService} from '../../services/ad.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit {

  ads: AdItem[];
  constructor(public adService: AdService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
