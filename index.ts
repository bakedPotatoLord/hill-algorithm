
import{Point} from './Point.js'
import{Climber} from './Climber.js'

const points = [
  [0,0],[0,1],
  [1,0],[1,1],[1,2],[1,3],
  [2,0],[2,1],[2,2],
  [3,0],[3,1],[3,2],[3,3],
  [4,0],[4,1],[4,2],
  [5,0],[5,1],[5,2],[5,3]
]


const pointArr = Array.from(points,(v)=>new Point(v[0],v[1]))

const climber = new Climber(1,1,pointArr)

climber.climbUntilTop()

console.log(`x: ${climber.x*6}, y: ${climber.y*6}`)

const realDists = Array.from(pointArr,(v)=>Math.round(v.distTo(climber)*6)+7)



console.log(realDists)

console.log((climber.sumDist()*6+(6*7))/12)





