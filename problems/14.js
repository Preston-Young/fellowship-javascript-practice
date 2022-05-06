/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    const freq = {};
    for (const number of numbers) {
        if (!(number in freq)) {
            freq[number] = 0;
        }

        freq[number] += 1;

        if (freq[number] >= (numbers.length / 2)) {
            return number;
        }
    }
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};