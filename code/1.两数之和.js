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
  // let hashObj = {};
  // let nlen = nums.length;
  // for (let i = 0; i < nlen; i++) {
  //   hashObj[nums[i]] = i;
  // }
  // for (let i = 0; i < nlen; i++) {
  //   let val = hashObj[target - nums[i]];
  //   if (val >= 0 && val !== i) {
  //     return [i, val];
  //   }
  // }

  /*****五毒神掌第二遍 */
  // // 不考虑时间复杂度较高的算法，对数组构造 hash
  // let hashObj = {};
  // for (let i = 0, len = nums.length; i < len; i++) {
  //   let result = target - nums[i];
  //   if (hashObj[result] >= 0) {
  //     return [hashObj[result], i];
  //   }
  //   hashObj[nums[i]] = i;
  // }

  /*****五毒神掌第三遍 */
  // 分析题意：在数组中，找出两个符合目标的数据，目标是相加之和为 target，输出数据在数组中的索引
  // 根据题意，输出的是索引而不是值，所以在构造 hash 的时候要保存索引
  // let hashObj = {};
  // // 遍历数据，检查是否满足条件，不满足则保存该数据
  // for (let i = 0, len = nums.length; i < len; i++) {
  //   let value = target - nums[i];
  //   if (hashObj[value] !== void 0) {
  //     // 输出索引
  //     return [hashObj[value], i];
  //   }
  //   // 保存当前值索引，构造 hash
  //   hashObj[nums[i]] = i;
  // }

  /********第四遍 构造hash ****** */
  let hashObj = {};
  for (let i = 0, len = nums.length; i < len; i++) {
    let dif = target - nums[i];
    if (hashObj[dif] !== void 0) {
      return [hashObj[dif], i];
    }
    hashObj[nums[i]] = i;
  }
};

/**
 * 测试用例
 *  [2,7,11,15]\n9
 *  [3,3]\n6
 *  [7,3,2,8]\n9
 */
// @lc code=end
