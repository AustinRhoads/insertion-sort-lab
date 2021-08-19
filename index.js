

function findMinAndRemove(array){
    let min = array[0];
    let minIndex = 0;

    for(let x = 0; x < array.length; x++){
        if(array[x] < min){
            min = array[x];
            minIndex = x;
        }
    }

    array.splice(minIndex, 1);
    return min;

}


function selectionSort(array){
    let min;
    let sorted = [];

    while(array.length != 0){
        min = findMinAndRemove(array);
        sorted.push(min)
    }
    return sorted;

}



var testArray1 = [3, 8, 4, 6, 7, 11, 4, 1]

console.log(selectionSort(testArray1))
//console.log( findMinAndRemove(testArray1))
