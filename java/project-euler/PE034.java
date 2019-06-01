/*
145 is a curious number, as 
1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to 
the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are 
not included.
*/

public class PE034 {
  public int digitFactSum(int n) {
    int rem;
    int sum = 0;
    while (n > 0) {
      rem = n % 10;
      sum += factorial(rem);
      n = (n - rem) / 10;
    }
    return sum;
  }

  public int factorial(int n) {
    if (n < 2)
      return 1;
    int prod = 1;
    for (int i = 2; i <= n; i++) {
      prod *= i;
    }
    return prod;
  }

  public int findCuriousNums() {
    int sum = 0;
    // int[] nums = new int[100];
    for (int i = 10; i < 100000; i++) {
      if (i == digitFactSum(i)) {
        sum += i;
        // nums.push(i);
      }
    }
    // return nums;
    return sum;
  }

  public static void main(String[] args) {
    PE034 test = new PE034();
    System.out.println(test.factorial(0)); // 1
    System.out.println(test.factorial(1)); // 1
    System.out.println(test.factorial(2)); // 2
    System.out.println(test.factorial(3)); // 6
    System.out.println(test.factorial(4)); // 24
    System.out.println(test.factorial(5)); // 120
    System.out.println(test.factorial(6)); // 720
    System.out.println(test.digitFactSum(10)); // 2
    System.out.println(test.digitFactSum(23)); // 8
    System.out.println(test.digitFactSum(456)); // 864
    System.out.println(test.findCuriousNums()); // 40730
  }
}
