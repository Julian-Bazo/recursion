console.log("Recursion Testing: Iterative");

function fibs(num) {
    let fibArray = [0, 1];
    for (let i = 1; i<num - 1; i++) {
        let fibNum = fibArray[i] + fibArray[i - 1];
        fibArray.push(fibNum);

    }
    return fibArray;
}

console.log(fibs(8));

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

console.log("Recursion Testing: Recursive");
console.log(fibsRec(8));