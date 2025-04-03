const range = (start, end, step) =>{
    let numbers = [];
    for(let i = start; i <= end; i += step){
        numbers.push(i);
    }
    return numbers;
}

 const sum = (list)=>{
    let total = 0
    for (let i = 0; i < list.length; i++){
        total += list[i]
    }
    return total 
    
} 
console.log(range(1, 10, 2));
console.log(sum(range(1, 10, 2)));