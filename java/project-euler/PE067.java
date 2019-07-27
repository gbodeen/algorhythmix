
/*
By starting at the top of the triangle below and moving to adjacent 
numbers on the row below, the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom in triangle.txt, a 15K text 
file containing a triangle with one-hundred rows.
*/

import java.util.List;
import java.util.ArrayList;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.Path;
import java.nio.charset.StandardCharsets;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;

public class PE067 {
  List<String> lines;
  List<List<Integer>> nums = new ArrayList<List<Integer>>();

  public void loadFile() {
    Path path = Paths.get("./data_for_algos", "p067_triangle.txt");
    try {
      lines = Files.readAllLines(path, StandardCharsets.UTF_8);
    } catch (IOException e) {
      System.out.println(e);
    }
  }

  public void loadNums() {
    for (int i = 0; i < 100; i++) {
      List<Integer> row = new ArrayList<Integer>();
      for (String term : lines.get(i).split(" ")) {
        row.add(Integer.valueOf(term));
      }
      nums.add(row);
    }
  }

  public int maxPyramidPath() {
    List<List<Integer>> pyramid = this.nums;
    for (int r = pyramid.size() - 2; r >= 0; r--) {
      for (int c = 0; c <= r; c++) {
        int rc = pyramid.get(r).get(c);
        int r1c = pyramid.get(r + 1).get(c);
        int r1c1 = pyramid.get(r + 1).get(c + 1);
        int max = Math.max(r1c, r1c1);
        pyramid.get(r).set(c, rc + max);
      }
    }
    return pyramid.get(0).get(0);
  }

  public static void main(String[] args) {
    PE067 test = new PE067();
    test.loadFile();
    System.out.println(test.lines.size());
    System.out.println(test.lines.get(3));
    test.loadNums();
    System.out.println(test.nums.size());
    System.out.println(test.nums.get(3));
    System.out.println(test.maxPyramidPath()); // 7273
  }
}