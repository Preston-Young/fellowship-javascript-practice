/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    let forwardStr = "";
    for (const char of str) {
        if (char != ' ') {
            forwardStr += char.toLowerCase();
        }
    }

    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += forwardStr.charAt(i);
    }

    return forwardStr === reverseStr;
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};