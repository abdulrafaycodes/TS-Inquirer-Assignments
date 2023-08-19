//Divide Function
export function divide(a: number, b: number): number {
    if (b !== 0) {
        return a / b;
    } else {
        throw new Error("Cannot divide by zero");
    }
}
