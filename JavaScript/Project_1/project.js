var firstName = prompt("Hello and Welcome. Please Enter your first name");
var lastName = prompt("Please Enter your last name");
var age = prompt("Please Enter your age");
var height = prompt("Please Enter your height(cm)")
var petName = prompt("Please Enter your pet name")
alert("Thank you so much for the information.")

if((firstName[0] === lastName[0]) &&
    (age > 20 && age < 30) &&
    (height >= 170) &&
    (petName[petName.length - 1] === "y")
  )
{
  console.log("Welcome comrade, you have passed the spy test.");
}
else
{
  console.log("Sorry, nothing to see here.")
}
