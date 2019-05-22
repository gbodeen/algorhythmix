
/*
A permutation is an ordered arrangement of objects. For example, 
3124 is one possible permutation of the digits 1, 2, 3 and 4. If 
all of the permutations are listed numerically or alphabetically, 
we call it lexicographic order. The lexicographic permutations of 
0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 
1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

import java.util.Map;
import java.util.HashMap;

public class PE024 {
  public int factorial(int n) {
    int prod = 1;
    for (int i = 2; i <= n; i++) {
      prod *= i;
    }
    return prod;
  }

  // public String permuteDigits(int n) {
  // String permute = "";
  // HashMap<Integer, Integer> vals = new HashMap<>();
  // for (int i = 0; i < 10; i++) {
  // vals.put(i, i);
  // }

  // for (int place = 9; place >= 0; place--) {
  // for (int digit = 9; digit >= 0; digit--) {
  // if (vals.get(digit) < 0)
  // continue;
  // int lessers = vals.get(digit) * factorial(place);
  // if (lessers < n) {
  // n -= lessers;
  // permute += Integer.toString(digit);
  // vals.put(digit, -1);
  // for (int i = digit + 1; i < 10; i++) {
  // vals.put(i, vals.get(i) - 1);
  // }
  // }
  // }
  // }
  // return permute;
  // }

  public String permuteDigits(int n) {
    String permute = "";
    int[] vals = new int[10];
    for (int i = 0; i < 10; i++) {
      vals[i] = i;
    }

    placeLoop: for (int place = 9; place >= 0; place--) {
      digitLoop: for (int digit = 9; digit >= 0; digit--) {
        if (vals[digit] < 0)
          continue digitLoop;
        int lessers = vals[digit] * factorial(place);
        if (lessers < n) {
          n -= lessers;
          permute += Integer.toString(digit);
          vals[digit] = -1;
          for (int i = digit + 1; i < 10; i++) {
            vals[i]--;
          }
          continue placeLoop;
        }
      }
    }
    return permute;
  }

  public static void main(String[] args) {
    PE024 test = new PE024();
    for (int i = 1; i < 10; i++) {
      System.out.println(test.permuteDigits(i));
    }
    System.out.println(test.permuteDigits(1000000)); // 2783915460
  }
}
