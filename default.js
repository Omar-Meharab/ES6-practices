function add(num1, num2 = 5) {
    num2 = num2 || 0;
    return num1 + num2;
}

const total = add(12, 1);
console.log(total);