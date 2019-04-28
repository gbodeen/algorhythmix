/*
You are given an n x n 2D matrix representing an image. Rotate the 
image by 90 degrees (clockwise).

Note: You have to rotate the image in-place, which means you have 
to modify the input 2D matrix directly. DO NOT allocate another 2D 
matrix and do the rotation.
*/

class Solution {
  public void rotate(int[][] matrix) {
    int N = matrix.length;
    int temp;
    for (int i = 0; i < N / 2; i++) {
      for (int j = i; j < N - 1 - i; j++) {
        temp = matrix[i][j];
        matrix[i][j] = matrix[N - 1 - j][i];
        matrix[N - 1 - j][i] = matrix[N - 1 - i][N - 1 - j];
        matrix[N - 1 - i][N - 1 - j] = matrix[j][N - 1 - i];
        matrix[j][N - 1 - i] = temp;
      }
    }
  }
}