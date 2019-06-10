
/*
The nth term of the sequence of triangle numbers is given by, 
tn = ½n(n+1); so the first ten triangle numbers are:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding 
to its alphabetical position and adding these values we form 
a word value. For example, the word value for SKY is 19 + 11 
+ 25 = 55 = t10. If the word value is a triangle number then 
we shall call the word a triangle word.

Using words.txt, a 16K text file containing nearly 
two-thousand common English words, how many are triangle words?
*/

import java.util.List;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.Path;
import java.nio.charset.StandardCharsets;
import java.io.IOException;
import java.util.Arrays;

public class PE042 {
  List<String> lines;
  List<String> words;

  public void loadFile() {
    Path path = Paths.get("./data_for_algos", "p042_words.txt");
    try {
      this.lines = Files.readAllLines(path, StandardCharsets.UTF_8);
    } catch (IOException e) {
      System.out.println(e);
    }
  }

  public void loadWords() {
    this.words = Arrays.asList(lines.get(0).replaceAll("\"", "").split(","));
  }

  public boolean isTriangularWord(String w) {
    int sum = 0;
    for (char c : w.toCharArray()) {
      sum += ((int) c) - 64;
    }
    return Math.sqrt(1 + 8 * sum) % 2 == 1;
  }

  public int countTriangularWords() {
    int count = 0;
    for (String word : this.words) {
      if (this.isTriangularWord(word))
        count++;
    }
    return count;
  }

  public static void main(String[] args) {
    PE042 test = new PE042();
    System.out.println(test.isTriangularWord("A")); // true
    System.out.println(test.isTriangularWord("B")); // false
    System.out.println(test.isTriangularWord("C")); // true
    System.out.println(test.isTriangularWord("SKY")); // true
    System.out.println(test.isTriangularWord("SKZ")); // false
    test.loadFile();
    test.loadWords();
    System.out.println(test.countTriangularWords()); // 162
  }
}