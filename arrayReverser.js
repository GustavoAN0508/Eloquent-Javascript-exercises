const reverseArray = (array) =>{
    let newArray = []
    for(let i = array.length - 1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}
let myArray = [1, 2, 3, 4, 5];
console.log(reverseArray(myArray));

const reverseArrayInPlace = (array) =>{
    for(let i = array.length - 1; i >= 0; i--){
        array[i] = array[array.length - i -1]
        if (i == Math.floor(array.length))
            break;
    }
    return array;
}

console.log(reverseArrayInPlace(myArray))

