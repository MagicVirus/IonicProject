import { Component, OnInit } from '@angular/core';
import {Hike} from '../entities/hike';
import {HikeDetailService} from '../hike-detail/hike-detail.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public hikings = [
    new Hike(1, 'Paris-Dakar', '2019-05-17', 26),
    new Hike(2, 'Clermont-LePuy', '2019-06-23', 31),
    new Hike(3, 'Bankok', '2019-09-15', 22),
    new Hike(4, 'Lyon', '2019-05-27', 58),
    new Hike(5, 'New-York', '2019-08-17', 278),
    new Hike(6, 'Bois de Boulogne', '2019-02-17', 963),
  ];

  constructor(
      private hikingDetailService: HikeDetailService, private  router: Router
              ) {

  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  detail(hike: Hike) {
        this.hikingDetailService.hike = hike;
        this.router.navigate(['hike-detail']);
  }
}
