
// https://www.codewars.com/kata/570a6a46455d08ff8d001002/solutions/typescript


/**
 * Removes trailing zeros from a given number.
 *
 * @param {number} n - The input number from which trailing zeros should be removed.
 * @returns {number} - The number with trailing zeros removed.
 *
 * @example
 * // returns 145
 * noBoringZeros(1450);
 *
 * @example
 * // returns 96
 * noBoringZeros(960000);
 *
 * @example
 * // returns 105
 * noBoringZeros(1050);
 *
 * @example
 * // returns -105
 * noBoringZeros(-1050);
 *
 * @example
 * // returns 0
 * noBoringZeros(0);
 */


export function noBoringZeros(n: number): number {
    let numberStr = n.toString();
    
    while (numberStr.endsWith('0')) {
        numberStr = numberStr.slice(0, -1);
    }
    
    return Number(numberStr);
}