//console.log("Did you change my file name?");
console.log("You made it to the console!");

let markMercer = {
  first: "Mark",
  last: "Mercer",
  age: 13,
  hairColour: "brown",
}
let cluckTheChicken = {
  first: "Cluck",
  last: "TheChicken",
  age: 17,
  hairColour: null,
}
console.log(markMercer);
console.log(cluckTheChicken);
let swap = markMercer.last; //Last: Mercer
markMercer.last = cluckTheChicken.last;
cluckTheChicken.last = swap;
console.log(markMercer);
console.log(cluckTheChicken);
