const marvel = ["thor" , "ironman" , "spiderman"]

const dc = ["superman" , "flash" , "batman"]


//marvel.push(dc)

const all = marvel.concat(dc)

console.log(all);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Harshit"));
console.log(Array.from("Harshit"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));




