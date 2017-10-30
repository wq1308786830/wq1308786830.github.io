import { Injectable } from '@angular/core';
import {AdItem} from '../beans/beans';
import {HeroProfileComponent} from '../components/advertising/hero-profile.component';
import {HeroJobAdComponent} from '../components/advertising/hero-job-ad.component';

@Injectable()
export class AdService {

  constructor() { }

  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
        body: 'Submit your resume today!'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
        body: 'Apply today'}),
    ];
  }

}
