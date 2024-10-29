function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    if(i<=1) return false;
    for(let i=2; i<=num/2; i++) {
        if(num%i===0) return false;
    }
    return true;
}

function factorial(num) {
    if(num <= 0) return 1;
    return num * factorial(num-1);
}

module.exports = {
    avg,
    prime,
    factorial
}