// shape
// base class, super class, parent class are the same



// circle , square
// derived class, sub class, child class are the same

// circle IS-A shape



// if circle inherits from shape then we say that shape is circles prototype

// all objects in js has a prototype/father


function Circle(radius){
// instance memebers
    this.radius = radius;
    this.move = function(){
        console.log('move')
    }
}

// prototype memebers
Circle.prototype.draw = function(){
    console.log('draw');
}

const circle = new Circle(1);

//  this only returns the instance members
console.log(Object.keys(circle))



for(let key in circle){
    console.log(key)
}