/*
Take the number 192 and multiply it by each of 1, 2, and 3:
192 × 1 = 192
192 × 2 = 384
192 × 3 = 576

By concatenating each product we get the 1 to 9 pandigital, 
192384576. We will call 192384576 the concatenated product 
of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying 
by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which 
is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that 
can be formed as the concatenated product of an integer 
with (1,2, ... , n) where n > 1?
*/

public class PE038 {
  public boolean isPandigital(String s) {
    if (s.length() != 9)
      return false;
    for (int i = 1; i <= 9; i++) {
      if (!s.contains(Integer.toString(i)))
        return false;
    }
    return true;
  }

  public int pandigitalProducts() {
    int max = 0;
    for (int n = 1; n < 98765; n++) {
      String word = Integer.toString(n);
      for (int j = 2; word.length() < 9; j++) {
        word += Integer.toString(n * j);
      }
      if (isPandigital(word) && Integer.valueOf(word) > max) {
        max = Integer.valueOf(word);
      }
    }
    return max;
  }

  public static void main(String[] args) {
    PE038 test = new PE038();
    System.out.println(test.isPandigital("192384576")); // true
    System.out.println(test.isPandigital("192384570")); // false
    System.out.println(test.pandigitalProducts()); // 932718654
  }
}
