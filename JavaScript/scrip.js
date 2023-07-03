

let list = ["The","dog", "quickly","ate","the","rabbit"]
console.log(list)
console.log(list.length)
list.push("whole.")
console.log(list);

list[0]="A"
list[1]="fat"
list[2]="cat"
console.log(list);

list.pop()
console.log(list);

list.unshift("moxy")
console.log(list);

console.log(list.join());

let tempory = list[2]
console.log(list);

list[2]= list[6]
list [6] = tempory
console.log(list);

const object = {make:"audi", model:"R8", brand:"R", REG:"LFG 44T"}
console.log(object.make);
console.log(object.REG);
console.log(object.model);
object.numberofdoors = 5;
console.log(object.numberofdoors);
object.model = "Q8"
console.log(object.model);
console.log(object);


const object2 = {make:"vw", model:"polo", brand:"vs", REG:"MEM 44T"}
console.log(object2.make);
console.log(object2.REG);
console.log(object2.model);
console.log(object2);

const object3 = {make:"Ford", model:"Escort", brand:"rs", REG:"ROM 44T"}
console.log(object3.make);
console.log(object3.REG);
console.log(object3.model);
console.log(object3);

const object4 = {make:"KIA", model:"Sedona", brand:"Van", REG:"LFG 44T"}
console.log(object4.make);
console.log(object4.REG);
console.log(object4.model);
console.log(object4);

console.log(object, object2, object3, object4);
console.log()

let array = [object, object2, object3, object4];
console.log(array[0].model);
console.log(array[1].model);
console.log(array[2].model);
console.log(array[3].model);
