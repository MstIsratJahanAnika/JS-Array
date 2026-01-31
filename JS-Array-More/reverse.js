const arr = [4, 54, 2, 22, 98, 58];

console.log(arr);

//reverse using 'reverse'
arr.reverse();

console.log(arr);//mutated array


//reverse using 'unshift'
const rev_arr = []; //initialized empty array 
for(const num of arr)
{
    console.log(num);
    const reversed = rev_arr.unshift(num);
}
console.log(rev_arr); //reversed array


//using for loop
const reversed_arr = [];
for(let i =0; i< arr.length; i++)
{
    const num = arr[i];
    reversed_arr.unshift(num);  
    //no console.log() here
}

//last index = array.length - 1


//using reverse for loop 
const rev_rev_num = [];
for(let i=(arr.length-1); i >=0; i--)
{
    const num = arr[i]; //extract reversely 
    console.log(num);
    rev_rev_num.push(num);
}
console.log(rev_rev_num);