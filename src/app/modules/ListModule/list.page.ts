import { Component, OnInit } from '@angular/core';
import {Hike} from '../../entities/Hike/hike';
import {HikeDetailService} from '../../services/HikeDetailService/hike-detail.service';
import {Router} from '@angular/router';
import {Coordinate} from '../../entities/Coordinate/coordinate';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public hikings = [
    new Hike(1, 'Paris-Dakar', '2019-05-17 02:03:04', 26, '../../assets/image1.jpg', 4, '2 avenue des landais', 'tout les uber eats vont ici', 125, new Coordinate(48.898123, 2.345040), new Coordinate(48.734705, 2.394971)),
    new Hike(2, 'Clermont-LePuy', '2019-06-23 05:06:07', 31, '../../assets/image1.jpg', 4, '2 avenue des landais', 'tout les uber eats vont ici', 141, new Coordinate(48.898123, 2.345040), new Coordinate(48.734705, 2.394971)),
    new Hike(3, 'Bankok', '2019-09-15 08:09:10', 22, '../../assets/image1.jpg', 4, '2 avenue des landais', 'tout les uber eats vont ici', 159, new Coordinate(48.898123, 2.345040), new Coordinate(48.734705, 2.394971)),
    new Hike(4, 'Lyon', '2019-05-27 11:12:13', 58, '../../assets/image1.jpg', 4, '2 avenue des landais', 'tout les uber eats vont ici', 357, new Coordinate(48.898123, 2.345040), new Coordinate(48.734705, 2.394971)),
    new Hike(5, 'New-York', '2019-08-17 14:15:16', 278, '../../assets/image1.jpg', 4, '2 avenue des landais', 'tout les uber eats vont ici', 258, new Coordinate(48.898123, 2.345040), new Coordinate(48.734705, 2.394971)),
    new Hike(6, 'Bois de Boulogne', '2019-02-17 17:18:19', 963, '../../assets/image1.jpg', 4, '2 avenue des landais', 'tout les uber eats vont ici', 852, new Coordinate(48.898123, 2.345040), new Coordinate(48.734705, 2.394971)),
  ];

  /**
   * Module de la page de la liste des randonnées
   * @param {HikeDetailService} hikingDetailService
   * @param {Router} router
   */
  constructor(
      private hikingDetailService: HikeDetailService, private  router: Router) {

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
