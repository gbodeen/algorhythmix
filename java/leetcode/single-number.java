/*
Given a non-empty array of integers, every element appears 
twice except for one. Find that single one.
Note: Your algorithm should have a linear runtime complexity. 
Could you implement it without using extra memory?
*/

// class Solution {
//   public int singleNumber(int[] nums) {
//     return Arrays.stream(nums).reduce((xor, num) -> xor ^ num).getAsInt();
//   }
// }
// runtime was slow!

class Solution {
  public int singleNumber(int[] nums) {
    int x = 0;
    for (int i : nums) {
      x ^= i;
    }
    return x;
  }
}