//  task 1
const a = 2;
const b = 5;
console.log(b - a);
console.log(b + a);
console.log(b * a);
console.log(b / a);

// task 2
const r = 3;
var pi = Math.PI;
let p = 2 * r * pi;
let s = pi * r * r;
console.log(p); // 18.84955592153876
console.log(s); // 28.274333882308138

// task 3
const m = 5;
let n;

if (m > 0) {
  n = 1;
} else if (m === 0) {
  n = 0;
} else if (m < 0) {
  n = -1;
} 
console.log(n); // 1

// task 4
var n1 = prompt("Введіть число:");
if (!isNaN(n1)) {
    if (n1 % 2 === 0) {
        alert(n1 + " є парним числом.");
    } else {
        alert(n1 + " є непарним числом.");
    }
} else {
    alert("Введене значення не є числом.");
}

// task 5
var sum = 0;
var product = 1;
for (var i = 1; i <= 10; i++) {
    sum += i;       
    product *= i;    
}
console.log("Сума: " + sum); // Сума: 55
console.log("Добуток: " + product); // Добуток: 3628800

// task 6
function sumOfSeries(k) {
    let sum = 0;
    let term = 1;
    for (let i = 1; i <= k; i++) {
        sum += term;
        term = term * 10 + 1; 
    }
    return sum;
}
let k = 2;
let result = sumOfSeries(k);
console.log(result); // 12

// task 7
function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true; 
    } else {
        return false; 
    }
}
console.log(isLeap(2024)); // true 
console.log(isLeap(2100)); // false 
console.log(isLeap(2000)); // true 

// task 8
function array(arr) {
    if (arr.length === 0) {
        return null;
    }
    let max = arr[0];
    let min = arr[0];
    let sumOfPositives = 0;
    let productOfNegatives = 1;
    let countPositives = 0;
    let countNegatives = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > 0) {
            sumOfPositives += arr[i];
            countPositives++;
        } else if (arr[i] < 0) {
            productOfNegatives *= arr[i];
            countNegatives++;
        }
    }

    return {
        max: max,
        min: min,
        sumOfPositives: sumOfPositives,
        productOfNegatives: productOfNegatives,
        countPositives: countPositives,
        countNegatives: countNegatives,
    };
}

const numbers = [5, -2, 10, -8, 3, 1, -7, 9, 4, -6];
const analysisResult = array(numbers);

console.log("Найбільше число: " + analysisResult.max); // 10
console.log("Найменше число: " + analysisResult.min); // -8
console.log("Сума додатних чисел: " + analysisResult.sumOfPositives); // 32
console.log("Добуток від'ємних чисел: " + analysisResult.productOfNegatives); // 672
console.log("Кількість додатних чисел: " + analysisResult.countPositives); // 6
console.log("Кількість від'ємних чисел: " + analysisResult.countNegatives); // 4

