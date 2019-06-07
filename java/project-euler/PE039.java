/*
If p is the perimeter of a right angle triangle with integral 
length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?
*/

public class PE039 {
  public int triangles(int p) {
    int count = 0;
    for (int a = 1; a <= p / (2 + Math.sqrt(2)); a++) {
      for (int b = a; b < (p - a) / 2; b++) {
        double c = p - a - b;
        if (c == Math.sqrt(a * a + b * b)) {
          count++;
        }
      }
    }
    return count;
  }

  public int maxTriangles() {
    int max = 0;
    int maxp = 0;
    for (int p = 12; p <= 1000; p++) {
      int current = this.triangles(p);
      if (current > max) {
        max = current;
        maxp = p;
      }
    }
    return maxp;
  }

  public static void main(String[] args) {
    PE039 test = new PE039();
    System.out.println(test.triangles(120)); // 3
    System.out.println(test.maxTriangles()); // 840
  }
}