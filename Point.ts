export class Point{
  x:number
  y:number
  constructor(x:number,y:number){
    this.x = x
    this.y = y
  }

  distTo(p:Point){
    return Math.hypot((this.x-p.x),(this.y-p.y))
  }
}