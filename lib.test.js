const { test, expect } = require("@jest/globals");
const lib = require("./lib");

//test avg
test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

//test prime
test("prime(2) should be true", () => {
    expect(lib.prime(2)).toBe(true);
});

test("prime(3) should be true", () => {
    expect(lib.prime(3)).toBe(true);
});

test("prime(4) should be false", () => {
    expect(lib.prime(4)).toBe(false);
});

test("prime(5) should be true", () => {
    expect(lib.prime(5)).toBe(true);
});

test("prime(6) should be false", () => {
    expect(lib.prime(6)).toBe(false);
});

test("prime(7) should be true", () => {
    expect(lib.prime(7)).toBe(true);
});

test("prime(499) should be true", () => {
    expect(lib.prime(499)).toBe(true);
});

test("prime(500) should be false", () => {
    expect(lib.prime(500)).toBe(false);
});

//test factorial
test("factorial(0) should be 1", () => {
    expect(lib.factorial(0)).toBe(1);
});

test("factorial(1) should be 1", () => {
    expect(lib.factorial(1)).toBe(1);
});

test("factorial(3) should be 6", () => {
    expect(lib.factorial(3)).toBe(6);
});

test("factorial(5) should be 120", () => {
    expect(lib.factorial(5)).toBe(120);
});

test("factorial(15) should be 1307674368000", () => {
    expect(lib.factorial(15)).toBe(1307674368000);
});