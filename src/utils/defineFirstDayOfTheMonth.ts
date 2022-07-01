export const defineFirstDayOfTheMonth = (refDayName: string, daysArr: (number | string)[]) => {
    if (refDayName === 'TUE') {
        daysArr.unshift('');
    } else if (refDayName === 'WED') {
        daysArr.unshift('', '');
    } else if (refDayName === 'THU') {
        daysArr.unshift('', '', '');
    } else if (refDayName === 'FRI') {
        daysArr.unshift('', '', '', '');
    } else if (refDayName === 'SAT') {
        daysArr.unshift('', '', '', '', '');
    } else if (refDayName === 'SUN') {
        daysArr.unshift('', '', '', '', '', '');
    }
    return daysArr;
}
