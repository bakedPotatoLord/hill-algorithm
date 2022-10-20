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

  update(){
    let startingSumDist = this.sumDist()

    if(this.sumDist(0.001,0) < startingSumDist){
      this.x += 0.001
      return false
    }else if(this.sumDist(-0.001,0) < startingSumDist){
      this.x -= 0.001
      return false
    }else if(this.sumDist(0,0.001) < startingSumDist){
      this.y += 0.001
      return false
    }else if(this.sumDist(0,-0.001) < startingSumDist){
      this.y -= 0.001
      return false
    }else{
      return true
    }
  }
}