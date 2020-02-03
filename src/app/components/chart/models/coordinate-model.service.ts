export class CoordinateModel {

  x: number;
  y: number;
  size: number;
  color: string;
  secondaryColor: string;
  title: string;

  constructor(args) {
    this.x = args['x'];
    this.y = args['y'];
    this.size = args['size'];
    this.color = args['color'];
    this.secondaryColor = args['secondaryColor'];
    this.title = args['title']
   }
}
