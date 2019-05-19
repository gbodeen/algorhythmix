
/*
 * How many Sundays fell on the first of the month during the twentieth century
 * (1 Jan 1901 to 31 Dec 2000)?
 */

import java.util.Calendar;

public class PE019 {
  public int countSundays() {
    Calendar cal = Calendar.getInstance();
    int sundays = 0;
    for (int year = 1901; year <= 2000; year++) {
      for (int month = 0; month < 12; month++) {
        cal.set(year, month, 1);
        if (cal.get(Calendar.DAY_OF_WEEK) == Calendar.SUNDAY) {
          sundays++;
        }
      }
    }
    return sundays;
  }

  public static void main(String[] args) {
    PE019 test = new PE019();
    System.out.println(test.countSundays()); // 173
  }
}