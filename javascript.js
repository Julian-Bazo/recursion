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
    
    let mergedArray = [];

    function merge(array, tempArray = []) {
        let mainLength = array.length;
        let halfLength = mainLength/2;

        let leftSideArray = array.slice(0, halfLength);
        let rightSideArray = array.slice(halfLength);

        if (leftSideArray.length === 1) {
            console.log("Single left");
            console.log(tempArray);

            if (leftSideArray[0] < rightSideArray[0]) {
                tempArray.push(leftSideArray[0]);
                tempArray.push(rightSideArray[0]);
            }
            else {
                tempArray.push(rightSideArray[0]);
                tempArray.push(leftSideArray[0]);
            }
            return tempArray;
        }

        else {
            console.log("Split left side");
            merge(leftSideArray, tempArray);
            merge(rightSideArray, tempArray);
            console.log(tempArray);
        }

        // console.log(leftSideArray);
        // console.log(rightSideArray);
    }

    merge(array);

    return mergedArray;

}


mergeSort(test1);

// 1 is greater than undefined, check if temp array has stuff