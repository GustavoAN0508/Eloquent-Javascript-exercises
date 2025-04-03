const min = (a, b) => {
    if (a > b)
        return b;
    else if (a < b)
        return a;
    else if (a = b)
        return "nummeros iguais";
    else
        return null;
}

console.log(min(0,10));
console.log(min(0,-10));
