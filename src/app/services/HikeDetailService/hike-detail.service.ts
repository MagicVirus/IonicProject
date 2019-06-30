import { Injectable } from '@angular/core';
import {Hike} from '../../entities/Hike/hike';

@Injectable({
  providedIn: 'root'
})
export class HikeDetailService {

  hike: Hike;

  /**
   * Service permettant de transferrer le hike a la page détail
   */
  constructor() { }


}
