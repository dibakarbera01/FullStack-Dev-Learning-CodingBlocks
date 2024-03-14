let arr = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (fun) {
    let arr = this;
    let acc, start_index;


    if (initialVal) {
        acc = initialVal;
        start_index = 0;
    } else {
        acc = arr[0];
        start_index = 1;
    }

    for (let i = start_index; i < arr.length; i++) {
        acc = fun(acc, arr[i], i, arr);
    }
    return acc;
}
let x = arr.reduce((acc, val, idx, arr) => {
    return acc * val;
}, 1)

console.log(x)