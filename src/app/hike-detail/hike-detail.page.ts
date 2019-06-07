import { Component, OnInit } from '@angular/core';
import {NavParams} from '@ionic/angular';
import {ListPage} from '../list.page';


@Component({
  selector: 'app-hike-detail',
  templateUrl: './hike-detail.page.html',
  styleUrls: ['./hike-detail.page.scss'],
})
export class HikeDetailPage implements OnInit {

  constructor(private hikings: ListPage) {
    // this.navParams.get('hikingParams');
    const list = new ListPage();
    console.log(this.list);
  }

  ngOnInit() {
  }

}
