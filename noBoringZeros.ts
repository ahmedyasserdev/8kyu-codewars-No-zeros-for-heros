export function noBoringZeros(n: number): number {
    let numberStr = n.toString();
    
    while (numberStr.endsWith('0')) {
        numberStr = numberStr.slice(0, -1);
    }
    
    return Number(numberStr);
}