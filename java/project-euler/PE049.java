
/*
The arithmetic sequence, 1487, 4817, 8147, in which each 
of the terms increases by 3330, is unusual in two ways: 
(i) each of the three terms are prime, and, (ii) each of 
the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, 
or 3-digit primes, exhibiting this property, but there is 
one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the 
three terms in this sequence?
*/

import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;
import java.util.Arrays;
import java.util.Collections;

public class PE049 {
  public boolean isPrime(int n) {
    if (n < 2)
      return false;
    if (n == 2)
      return true;
    if (n % 2 == 0)
      return false;
    for (int i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0)
        return false;
    }
    return true;
  }

  public List<Integer> allPermutes(int n) {
    char[] digits = (Integer.toString(n)).toCharArray();
    Arrays.sort(digits);
    String minPmt = new String(digits);
    List<String> pmts = this.permute(minPmt);
    List<Integer> nums = new ArrayList<Integer>();
    for (int i = 0; i < pmts.size(); i++) {
      nums.add(Integer.valueOf(pmts.get(i)));
    }
    Collections.sort(nums);
    return nums;
  }

  public List<String> permute(String s) {
    List<String> list = new ArrayList<String>();
    if (s.length() <= 1) {
      list.add(s);
      return list;
    }
    for (int i = 0; i < s.length(); i++) {
      String substr = s.substring(0, i) + s.substring(i + 1);
      List<String> subpermutes = permute(substr);
      for (int j = 0; j < subpermutes.size(); j++) {
        list.add(s.charAt(i) + subpermutes.get(j));
      }
    }
    return new ArrayList<String>(new HashSet<String>(list));
  }

  public List<List<Integer>> arithSeq3s(List<Integer> arr) {
    List<List<Integer>> seqs = new ArrayList<List<Integer>>();
    if (arr.size() < 3)
      return seqs;
    for (int i = 0; i < arr.size() - 2; i++) {
      int a = arr.get(i);
      for (int j = i + 1; j < arr.size() - 1; j++) {
        int b = arr.get(j);
        for (int k = j + 1; k < arr.size(); k++) {
          int c = arr.get(k);
          if (b - a == c - b) {
            List<Integer> seq = new ArrayList<Integer>();
            seq.add(a);
            seq.add(b);
            seq.add(c);
            seqs.add(seq);
          }
        }
      }
    }
    return seqs;
  }

  public List<List<Integer>> specialSeq() {
    List<List<Integer>> seqs = new ArrayList<List<Integer>>();
    for (int i = 1111; i <= 3799; i += 2) {
      if (!(Integer.toString(i)).contains("0") && this.isPrime(i)) {
        List<Integer> pmts = this.allPermutes(i);
        List<Integer> primes = new ArrayList<Integer>();
        for (int j = 0; j < pmts.size(); j++) {
          if (this.isPrime(pmts.get(j))) {
            primes.add(pmts.get(j));
          }
        }
        List<List<Integer>> primeSeqs = this.arithSeq3s(primes);
        if (primeSeqs.size() > 0) {
          seqs.addAll(primeSeqs);
        }
      }
    }
    return seqs;
  }

  public static void main(String[] args) {
    PE049 test = new PE049();
    // System.out.println(test.allPermutes(0)); //
    // System.out.println(test.allPermutes(1)); //
    // System.out.println(test.allPermutes(23)); //
    // System.out.println(test.allPermutes(44)); //
    // System.out.println(test.allPermutes(567)); //
    // System.out.println(test.allPermutes(888)); //
    // System.out.println(test.allPermutes(9012)); //
    // System.out.println(test.allPermutes(3456)); //
    // System.out.println(test.allPermutes(7778)); //
    // System.out.println(test.allPermutes(9900)); //
    // System.out.println(test.allPermutes(1487)); //
    // System.out.println(test.arithSeq3s(test.allPermutes(1487))); //
    System.out.println(test.specialSeq()); // 296962999629
  }
}
