"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
function simpleCalculator(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
;
const result = simpleCalculator('Robert', 'Smith');
result.split(' ');
const userInfo = {
    id: 1,
    name: 'Alec',
    job: { title: "Admin", description: 'Admin of the system' }
};
console.log((_a = userInfo === null || userInfo === void 0 ? void 0 : userInfo.job) === null || _a === void 0 ? void 0 : _a.description);
const nullValue = null;
const getValue = nullValue !== null && nullValue !== void 0 ? nullValue : 'Default';
console.log(getValue);
