const numbers = [24, 11, 36, 70, 69, 63];
const age = [23, 22, 21, 19];
console.log(numbers);

//one element push
numbers.push(40);
console.log(numbers);

//multiple elements push
numbers.push(19, 10, 121, 7);
console.log(numbers);

//push array into another array
numbers.push(age);
console.log(numbers);

const friends = ['anika', 'nabila', 'paprey', 'nusrat', 'eit'];

//pop - delete from last 
const out1 = friends.pop();
console.log(friends);
// console.log(out1);

const out2 = friends.pop();
console.log(friends);
// console.log(out2);

console.log(out1, out2);//accessing both the popped value