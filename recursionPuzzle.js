const findSolution = (alvo) => {
    const find = (atual, antigo) => {
        if (atual == alvo){ 
            return antigo;
        }
        else if (atual > alvo){
            return null;
        }
        else {
            return  find(atual + 5, `(${antigo} + 5)`) ??
                    find(atual * 3, `(${antigo} * 3)`); //a repeticao ocorre aqui
        }
    }
    return find(1, "1");
}

console.log(findSolution(24))