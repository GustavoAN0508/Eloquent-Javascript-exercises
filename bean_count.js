


const contaB = (nome) => {
    let count = 0
    for(let i = 0; i < nome.length; i++){
        if (nome[i] == "B")
            count++;
    }
    return count;
}

const contaCara = (nome, letra)=>{
    let count = 0;
    for(let i = 0; i < nome.length; i++){
        if (nome[i] == letra)
            count++;
    }
    return count;
}

//curiosidade:
//ha uma maneira de fazer isso sem for no JS com as funcoes split() e filter
//tenta nome.split("").filter( c => c == letra).length;
//also, tem reduce tambem
//nome.split("").reduce((count,c) => letra? count + 1 : count, 0); 

console.log(contaB("BOB"))
console.log(contaCara("kakkerlak", "k"))