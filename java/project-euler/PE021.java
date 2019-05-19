
/*
Let d(n) be defined as the sum of proper divisors of n 
(numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are 
an amicable pair and each of a and b are called amicable 
numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 
10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. 
The proper divisors of 284 are 1, 2, 4, 71 and 142; so 
d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

import java.util.List;
import java.util.ArrayList;

public class PE021 {
  public int[] divisors(int n) {
    List<Integer> divs = new ArrayList<Integer>();
    divs.add(1);
    for (int i = 2; i * i < n; i++) {
      if (n % i == 0) {
        int L = (divs.size() + 1) / 2;
        divs.add(L, i);
        divs.add(L + 1, n / i);
      }
    }
    Double sqrtN = Math.sqrt(n);
    if (sqrtN % 1 == 0 && n != 1) {
      int L = (divs.size() + 1) / 2;
      divs.add(L, sqrtN.intValue());
    }
    int[] result = divs.stream().mapToInt(i -> i).toArray();
    return result;
  }

  public int arraySum(int[] arr) {
    int sum = 0;
    for (int i : arr) {
      sum += i;
    }
    return sum;
  }

  public boolean isAmicable(int n) {
    int m = arraySum(divisors(n));
    return (m != n) && (arraySum(divisors(m)) == n);
  }

  public int sumAmicables() {
    int sum = 0;
    for (int i = 1; i < 10000; i++) {
      if (isAmicable(i)) {
        sum += i;
      }
    }
    return sum;
  }

  public static void main(String[] args) {
    PE021 test = new PE021();
    System.out.println(test.sumAmicables()); // 31626
  }
}