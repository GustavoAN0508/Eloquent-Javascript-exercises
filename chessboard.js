let size = 8;

for (let b = 0; b < size; b++){
    if (b % 2 == 0){
        for (let c = 0; c < size; c++){
            process.stdout.write(" *") //eh a unica forma de fazer isso sem newline
    } 
        console.log("")
    }else{
        for (let d = 0; d < size; d++){
            process.stdout.write("* ")
        }
        console.log("")
    }

}