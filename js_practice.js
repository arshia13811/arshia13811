// shape
// base class, super class, parent class are the same



// circle , square
// derived class, sub class, child class are the same

// circle IS-A shape



// if circle inherits from shape then we say that shape is circles prototype

// all objects in js has a prototype/father


let person = {name : 'mohamd'}
// console.log(person);

let objectbase = Object.getPrototypeOf(person);

let descriptor = Object.getOwnPropertyDescriptor(objectbase, 'toString');

Object.defineProperty(person, 'name',{
    writable : true,
    enumerable : true

});
console.log(Object.keys(person))

person.name = 'fali';
console.log(person)
