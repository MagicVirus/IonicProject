import { MapAPIResult } from './map-apiresult';
import {Stats} from "../Stats/stats";

describe('MapAPIResult', () => {
  it('should create an instance', () => {
    expect(new MapAPIResult("jaren",5,5,'ok', new Stats(5))).toBeTruthy();
  });
});
