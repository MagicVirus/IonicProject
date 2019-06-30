import { Hike } from './hike';
import {Coordinate} from '../Coordinate/coordinate';

describe('Hike', () => {
  it('should create an instance', () => {
    expect(    new Hike(1, 'Paris-Dakar',
        '2019-05-17', 26, '../../assets/image1.jpg', 4,
        '2 avenue des landais', 'tout les uber eats vont ici',
        125, new Coordinate(48.898123, 2.345040),
        new Coordinate(48.734705, 2.394971))).toBeTruthy();
  });
});
