console.log("Recursion Testing:");

function fibs(num) {
    let fibArray = [0, 1];
    for (let i = 1; i<num - 1; i++) {
        let fibNum = fibArray[i] + fibArray[i - 1];
        fibArray.push(fibNum);

    }
    return fibArray;
}

function fibsRec(num, array = []) {


    if (num < 2) {
        return num;
    }
    if (num >= 2) {
        let first = fibsRec(num - 1, array);
        let second = fibsRec(num - 2, array);
        array[num - 1] = first;
        array[num - 2] = second;
        array[num] = first + second;
        console.log(array);
        return first + second;
    }
    if (num === num) {
        return array;
    }
}

console.log(fibsRec(6));