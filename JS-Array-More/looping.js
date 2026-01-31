/**
 * Looping Techniques
 * 1. for loop 
 * 2. while loop
 * 3. do-while loop  --> ignore
 * 4. for-of --> use for array loop
 * 5. for-in --> use for object loop
 * 
 */

const friends = ['Elon', 'Bill', 'Mark', 'Waren',];

for(const friend of friends)
{
    console.log(friend);
}

for(let i=0; i<10; i++)
{
    // console.log(i);
    // console.log(friends[i]);
}

//for solving the excess array indexing - loop upto length 

//for loop example 
//loop - 1
for(let i=0; i< friends.length; i++)
{
    console.log(i);
    console.log(friends[i]);
}

//loop - 2 
const numbers = [23, 490, 7459, 109, 7597, 6857, 231, 14];
for(let n=0; n< numbers.length; n++)
{
    console.log(numbers[n]);
}



//while loop examples 
//loop - 1
let i = 0;
while(i< friends.length)
{
    console.log(friends[i]);
    i++;
}

//loop - 2 
let n = 0; 
while(n < numbers.length)
{
    console.log(numbers[n]);
    n++;
}