/*
If the numbers 1 to 5 are written out in words: one, two, three, 
four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used 
in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were 
written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three 
hundred and forty-two) contains 23 letters and 115 (one hundred 
and fifteen) contains 20 letters. The use of "and" when writing 
out numbers is in compliance with British usage.
*/

public class PE017 {

  public String[] ones = { "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };
  public String[] teens = { "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
      "eighteen", "nineteen" };
  public String[] tens = { "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" };

  public int countLetters(String s) {
    int count = s.length();
    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
      if (c == ' ' || c == '-') {
        count--;
      }
    }
    return count;
  }

  public String numToWords(int n) {
    if (n == 1000) {
      return "one thousand";
    }

    String name = "";
    if (n >= 100) {
      name += ones[(n / 100)] + " hundred";
      if (n % 100 > 0) {
        name += " and ";
      }
    }
    if (n % 100 >= 10 && n % 100 < 20) {
      name += teens[(n % 100) - 10];
      return name;
    }
    if (n % 100 >= 20) {
      name += tens[(n % 100) / 10];
      if (n % 10 > 0) {
        name += "-";
      }
    }
    name += ones[n % 10];
    return name;
  }

  public int countTo1K() {
    int count = 0;
    for (int i = 1; i <= 1000; i++) {
      count += countLetters(numToWords(i));
    }
    return count;
  }

  public static void main(String[] args) {
    PE017 test = new PE017();
    int[] testVals = { 1, 5, 9, 10, 12, 18, 20, 21, 88, 100, 104, 115, 240, 342, 1000 };
    for (int i : testVals) {
      System.out.println(String.valueOf(i) + ": " + test.numToWords(i));
    }
    System.out.println(test.countLetters(test.numToWords(342)));
    System.out.println(test.countLetters(test.numToWords(115)));
    System.out.println(test.countTo1K()); // 21124
  }
}