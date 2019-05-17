import { Component, OnInit } from '@angular/core';
import {Hike} from '../entities/hike';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private hikings = [
    new Hike('Paris-Dakar', '2019-05-17', 26),
    new Hike('Clermont-LePuy', '2019-06-23', 31),
    new Hike('Bankok', '2019-09-15', 22),
    new Hike('Lyon', '2019-05-27', 58),
    new Hike('New-York', '2019-08-17', 278),
    new Hike('Bois de Boulogne', '2019-02-17', 963),
  ];
    public items: Array<{ name: string; date: Date; nbPeople: number }> = [];
    constructor() {
        for (let i = 1; i < this.hikings.length; i++) {
            this.items.push({
                name: i.name,
                date: i.date,
                nbPeople: i.nbPeople
            });
        }
    }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
