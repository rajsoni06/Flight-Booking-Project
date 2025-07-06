Array.prototype.groupBy = function (keySlectionFn) {
    const result = {};

    if (typeof keySlectionFn !== 'function' || this === null || !Array.isArray(this)) {
        return result;
    }

    for (const element of this) {
        let key;
        try {
            key = keySlectionFn(element);
        } catch (e) {
            key = null;
        }
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(element);
    }
    return result;

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const grouped = numbers.groupBy(num => num % 2 === 0 ? 'even' : 'odd');
    console.log(groupedByEvenOdd);

    const groupByFirstDigit = numbers.groupBy(x => String(x)[0]);
    console.log(groupByFirstDigit);
}