import { Point } from "./Point.js"

export class Climber extends Point{
  pArr: Point[]
  constructor(x:number,y:number,pArr:Point[]){
    super(x,y)
    this.pArr = pArr
  }

  sumDist(dx?:number,dy?:number){
    if( typeof dx == "undefined" || typeof dy == 'undefined' ){
      dx = 0
      dy = 0
    }
    let tempThis = this
    tempThis.x += dx
    tempThis.y += dy
    //gets dist array
    let distArr = Array.from(this.pArr,(v)=>{return tempThis.distTo(v)})
    //finds and returns sum
    return distArr.reduce((partialSum, a) => partialSum + a, 0);
  }

  update(precision:number){
    let startingSumDist = this.sumDist()

    if(this.sumDist(precision,0) < startingSumDist){
      this.x += precision
      return false
    }else if(this.sumDist(-precision,0) < startingSumDist){
      this.x -= precision
      return false
    }else if(this.sumDist(0,precision) < startingSumDist){
      this.y += precision
      return false
    }else if(this.sumDist(0,-precision) < startingSumDist){
      this.y -= precision
      return false
    }else{
      return true
    }
  }

  climbUntilTop(){
    while(!this.update(0.00001)){}
    return new Point(this.x,this.y)
  }
}