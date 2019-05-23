
// The sum of the squares of the first ten natural numbers is
// 1^2 + 2^2 + ... + 10^2 = 385

// The square of the sum of the first ten natural numbers is
// (1 + 2 + ... + 10)^2 = 55^2 = 3025

// Hence the difference between the sum of the squares of the 
// first ten natural numbers and the square of the sum 
// is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the 
// first one hundred natural numbers and the square of the sum.

public class PE006 {
  public int sumOfSquares(int max) {
    int sum = 0;
    for (int i = 1; i <= max; i++) {
      sum += i * i;
    }
    return sum;
  }

  public int squareOfSum(int max) {
    int sum = (max / 2) * (max + 1);
    return sum * sum;
  }

  public int SOSdifference(int max) {
    return squareOfSum(max) - sumOfSquares(max);
  }

  public static void main(String[] args) {
    PE006 test = new PE006();
    System.out.println(test.SOSdifference(10)); // 2640
    System.out.println(test.SOSdifference(100)); // 25164150
  }
}
