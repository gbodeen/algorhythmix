/*
You are given the following information, but you may prefer to 
do some research for yourself.

* 1 Jan 1900 was a Monday.
* Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
* A leap year occurs on any year evenly divisible by 4, but not 
on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the 
twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

class PE019 {
  // nextDay({ day, month, year }) {
  //   // New Year's Eve
  //   if (month === 12 && day === 31) {
  //     return { day: 1, month: 1, year: year + 1 };
  //   }
  //   // end of April, June, September, November
  //   if (day === 30 && (month === 4 || month === 6 || month === 9 || month === 11)) {
  //     return { day: 1, month: month + 1, year };
  //   }
  //   // end of all the rest except February
  //   if (day === 31) {
  //     return { day: 1, month: month + 1, year };
  //   }
  //   // end of February on leap years
  //   if (month === 2 && day === 29) {
  //     return { day: 1, month: 3, year };
  //   }
  //   // end of Februrary on non-leap years
  //   if (month === 2 && day === 28 && (year % 4 !== 0)) {
  //     return { day: 1, month: 3, year };
  //   }
  //   // any other day
  //   return { day: day + 1, month, year };
  // }

  // isSunday(dayNum) {
  //   return dayNum % 7 === 0;
  // }

  // is1stOfMonth({ day }) {
  //   return day === 1;
  // }

  // check20thCentury() {
  //   let count = 0;
  //   let date = { day: 1, month: 1, year: 1901 };
  //   let dayNum = 2; // January 1st, 1901 was a Tuesday
  //   while (date.year <= 2000) {
  //     if (this.is1stOfMonth(date) && this.isSunday(dayNum)) count++;
  //     dayNum++;
  //     date = this.nextDay(date);
  //   }
  //   return count;
  // }

  // // Simplified version:
  check20thCentury() {
    let sundays = 0;
    for (let year = 1901; year <= 2000; year++) {
      for (let month = 0; month < 12; month++) {
        if ((new Date(year, month, 1)).getDay() === 0) {
          sundays++;
        }
      }
    }
    return sundays;
  }
}


// test
const test = new PE019();
console.log(test.check20thCentury()); // 171