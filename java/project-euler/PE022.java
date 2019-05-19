
/*
Using names.txt, a 46K text file containing over five-thousand first names, 
begin by sorting it into alphabetical order. Then working out the alphabetical 
value for each name, multiply this value by its alphabetical position in the 
list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is 
worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would 
obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/

import java.util.List;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.Path;
import java.nio.charset.StandardCharsets;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;

public class PE022 {
  List<String> lines;
  List<String> names;

  public void loadFile() {
    Path path = Paths.get("./data_for_algos", "p022_names.txt");
    try {
      lines = Files.readAllLines(path, StandardCharsets.UTF_8);
    } catch (IOException e) {
      System.out.println(e);
    }
  }

  public void loadNames() {
    names = Arrays.asList(lines.get(0).replaceAll("\"", "").split(","));
    Collections.sort(names);
  }

  public int alphaValue(String word) {
    int sum = 0;
    for (char c : word.toCharArray()) {
      int num = (int) c;
      sum += num - 64;
    }
    return sum;
  }

  public int totalOfNameScores() {
    int total = 0;
    for (int i = 0; i < names.size(); i++) {
      total += alphaValue(names.get(i)) * (i + 1);
    }
    return total;
  }

  public static void main(String[] args) {
    PE022 test = new PE022();
    test.loadFile();
    // System.out.println(test.lines);
    test.loadNames();
    // for (String name : test.names) {
    // System.out.println(name);
    // }
    System.out.println(test.names.get(937)); // "COLIN"
    System.out.println(test.alphaValue("COLIN")); // 53
    System.out.println(test.totalOfNameScores()); // 871198282
  }
}