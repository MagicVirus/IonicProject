import { Component, OnInit } from '@angular/core';
import {NavParams} from '@ionic/angular';

@Component({
  selector: 'app-hike-detail',
  templateUrl: './hike-detail.page.html',
  styleUrls: ['./hike-detail.page.scss'],
})
export class HikeDetailPage implements OnInit {

  constructor(public navParams: NavParams) {
    this.navParams.get('hikingParams');
  }

  ngOnInit() {
  }

}
