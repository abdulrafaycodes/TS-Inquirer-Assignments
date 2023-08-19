"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = void 0;
//Divide Function
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        throw new Error("Cannot divide by zero");
    }
}
exports.divide = divide;
