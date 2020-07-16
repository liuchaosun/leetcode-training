/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // @1 最简单解法--时间复杂度 O(n*n)
  // for(let i=0;i<nums.length;i++){
  //     for(let j=i+1;j<nums.length;j++){
  //         if(nums[i]+nums[j]===target){
  //             return [i,j];
  //         }
  //     }
  // }

  // @2 牺牲空间换时间--构造一个 hash 对象
  let hashObj = {};
  let nlen = nums.length;
  for (let i = 0; i < nlen; i++) {
    hashObj[nums[i]] = i;
  }
  for (let i = 0; i < nlen; i++) {
    let val = hashObj[target - nums[i]];
    if (val >= 0 && val !== i) {
      return [i, val];
    }
  }

  return null;
};
// @lc code=end
