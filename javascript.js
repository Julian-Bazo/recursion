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
    let mainLength = array.length;
    let halfLength = Math.floor(mainLength/2);

    if (mainLength <= 1) {
        return array;
    }

    let left = mergeSort(array.slice(0, halfLength));
    let right = mergeSort(array.slice(halfLength));

    return mergeTwo(left, right);

}

function mergeTwo(left, right) {
    let sortedArray = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            sortedArray.push(left[i]);
            i++
        }
        else {
            sortedArray.push(right[j]);
            j++;
        } 
    }

    while (i < left.length) {
        sortedArray.push(left[i]);
        i++
    }

    while (j < right.length) {
        sortedArray.push(right[j]);
        j++
    }

    return sortedArray;
}


console.log(mergeSort(test1));

// 1 is greater than undefined, check if temp array has stuff