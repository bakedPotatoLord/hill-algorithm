
import{Point} from './Point.js'
import{Climber} from './Climber.js'

let points = [
  [0,0],[0,1],
  [1,0],[1,1],[1,2],[1,3],
  [2,0],[2,1],[2,2],
  [3,0],[3,1],[3,2],[3,3],
  [4,0],[4,1],[4,2],
  [5,0],[5,1],[5,2],[5,3]
]


let pointArr = Array.from(points,(v)=>new Point(v[0],v[1]))

let climber = new Climber(1,1,pointArr)


while(!climber.update()){}

console.log(climber.x,climber.y)






