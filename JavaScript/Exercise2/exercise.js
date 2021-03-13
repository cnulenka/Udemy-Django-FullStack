// Do this with a While Loop and a For Loop
/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//

// While Loop
var x = 5;
while(x>0)
{
  console.log("hello");
  x--;
}

// For Loop
for(var i = 0; i < 5; i++)
{
    console.log("hello");
}


/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop

x = 1;

while(x<=25)
{
  if(x%2 !== 0)
    console.log(x);
  x++;
}

// METHOD TWO
// For Loop

for (var i = 1; i <= 25; i++)
{
  if(i%2 !== 0)
    console.log(i);
}
