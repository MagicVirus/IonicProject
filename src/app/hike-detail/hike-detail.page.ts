import { Component, OnInit } from '@angular/core';
import {NavParams} from '@ionic/angular';
import {ListPage} from '../list/list.page';
import {Hike} from '../entities/hike';
import {HikeDetailService} from './hike-detail.service';


@Component({
  selector: 'app-hike-detail',
  templateUrl: './hike-detail.page.html',
  styleUrls: ['./hike-detail.page.scss'],
})
export class HikeDetailPage implements OnInit {

  constructor(private hikingDetailService: HikeDetailService) {
      console.log(hikingDetailService.hike.name);
  }

  ngOnInit() {
  }

}
