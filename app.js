console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds (count) {
    for (let i = 0; i <= count; i++)
    {
        if (i % 2 != 0)
        {console.log(i);}
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(age) {
    const aboveSixteen = "you can drive!";
    const belowSixteen = "sorry, you cannot drive"
    if (age >= 16)
    {console.log(aboveSixteen);}
    else{console.log(belowSixteen);}
}

//3)
function whichQuadrant(x, y)
{
    if (x == 0 && y == 0)
    {console.log("This is the orgin");}

    else if (x == 0)
    {console.log("This is on the Y axis");}

    else if (y == 0)
    {console.log("This is on the X axis");}

    else if (x > 0 && y > 0)
    {console.log("This is in quad 1.");}

    else if (x < 0 && y > 0)
    {console.log("This is in quad 2.");}

    else if (x > 0 && y < 0)
    {console.log("This is in quad 3.");}

    else if (x > 0 && y < 0)
    {console.log("This is in quad 4.");}
}

//4)
function isTriangle (a, b, c) {
    if (a == 0 || b == 0 || c == 0)
    {console.log("This is NOT a triangle!");}

    else if (a + b >= c && c + b >= a && c + a >= b)
    {console.log("This is a triangle!");}

    else{console.log("This isn't a triangle...");}
}
