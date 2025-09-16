// console.log("Recursion Testing: Iterative");

function fibs(num) {
    let fibArray = [0, 1];
    for (let i = 1; i<num - 1; i++) {
        let fibNum = fibArray[i] + fibArray[i - 1];
        fibArray.push(fibNum);

    }
    return fibArray;
}

// console.log(fibs(8));

function fibsRec(num) {

    let resultsArray = [];

    function recursion(num) {
        if (num < 2) {
            return num;
        }
        else {
            let first = recursion(num - 1);
            let second = recursion(num - 2);
            resultsArray[num - 1] = first;
            resultsArray[num - 2] = second;
            resultsArray[num] = first + second;
            return first + second;
        }
    }

    recursion(num);

    resultsArray.pop();

    return resultsArray;
    
}

// console.log("Recursion Testing: Recursive");
// console.log(fibsRec(8));



test1 = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(`Tested Array: ${test1}`);


function mergeSort(array) {
    let length = array.length;
    
    if (length <= 1) {
        return array;
    }
    else {
        let halfLength = Math.floor(length/2);
        let left = mergeSort(array.slice(0, halfLength));
        let right = mergeSort(array.slice(halfLength));

        return mergeTwo(left, right);

    }
}

function mergeTwo(left, right) {
    let sorted = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]){
            sorted.push(left[i]);
            i++
        }
        else {
            sorted.push(right[j]);
            j++
        }
    }

    while (i < left.length) {
        sorted.push(left[i]);
        i++
    }

    while (j < right.length) {
        sorted.push(right[j]);
        j++
    }

    return sorted;
}


console.log(mergeSort(test1));

// 1 is greater than undefined, check if temp array has stuff