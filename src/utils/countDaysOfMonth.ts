export const countDaysOfMonth = (month: number, year: number, daysArr: (number | string)[]) => {
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        for (let i = 0; i <= 30; i++) {
            daysArr[i] = i + 1;
        }
    } else if (month === 2) {
        if (year % 4 === 0) {
            for (let i = 0; i <= 28; i++) {
                daysArr[i] = i + 1;
            }
        } else {
            for (let i = 0; i <= 27; i++) {
                daysArr[i] = i + 1;
            }
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        for (let i = 0; i <= 29; i++) {
            daysArr[i] = i + 1;
        }
    } else {
        daysArr = [];
    }
    return daysArr;
}
