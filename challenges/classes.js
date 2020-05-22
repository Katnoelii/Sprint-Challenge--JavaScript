// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker1 {
    constructor(attributes){
        this.length = attributes.length;
        this.height = attributes.height;
        this.width = attributes.width;
    }//this ends constructor
   volume(){
       return(this.length * this.width * this.height);
  };//this ends volume
  surfaceArea(){
    return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
  };//this ends surfaceArea
}//this ends CuboidMaker
const newcuboid = new CuboidMaker1({
    length:4,
    width:5,
    height:5
  });
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newcuboid.volume()); // 100
console.log(newcuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(attributes){
        super(attributes);
    }//this ends constructor
    cubeVol(){
        return Math.pow(this.length,3);
    }//this ends cubeVol
    cubeSA(){
        return (6 * Math.pow(this.length,2));
    }
}//this ends cubeMaker

const cube = new CubeMaker({
    length:5,
    width:5,
    height:5
});

console.log(cube.cubeVol());
console.log(cube.cubeSA());