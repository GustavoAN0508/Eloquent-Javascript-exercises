let a = 0;

for (a; a < 100; a++){
    if (a % 3 === 0)
        console.log("fizz");
    else if (a % 5 === 0)
        console.log("buzz");
    else
        console.log(a);
}