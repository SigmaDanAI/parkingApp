"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChileanDateTime = exports.formatDate = exports.formatDateBad = void 0;
function getChileanDateTime() {
    const currentUTC = new Date();
    const chileanTimeOffset = 4 * 60 * 60 * 1000;
    const chileanTime = new Date(currentUTC.getTime() - chileanTimeOffset);
    return chileanTime;
}
exports.getChileanDateTime = getChileanDateTime;
const formatDateBad = (dateTimeString) => {
    const [datePart] = dateTimeString.split("T");
    const [year, month, day] = datePart.split("-");
    return `${year}-${month}-${day}`;
};
exports.formatDateBad = formatDateBad;
function formatDate(date) {
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    return `${year}-${month}-${day}`;
}
exports.formatDate = formatDate;
function padZero(num) {
    return num < 10 ? `0${num}` : `${num}`;
}
//# sourceMappingURL=timeFunctions.js.map