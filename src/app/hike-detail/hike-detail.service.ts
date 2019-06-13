import { Injectable } from '@angular/core';
import {Hike} from '../entities/hike';

@Injectable({
  providedIn: 'root'
})
export class HikeDetailService {

  hike: Hike;

  constructor() { }


}
