export default class ClassRoom{
  constructor(maxStudentsSize : number){
    this._maxStudentsSize = maxStudentsSize
  }
  
}


const room = new ClassRoom(10);
console.log(room._maxStudentsSize)
