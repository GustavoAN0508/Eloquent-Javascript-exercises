const ehPar = (num) =>{
    if (num == 0)
        return true;
    else if (num == 1)
        return false;
    else{
        return ehPar(num-2); //recursão com cauda
   }
}

console.log(ehPar(6));