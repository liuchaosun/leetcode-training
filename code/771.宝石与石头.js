/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  //  遍历 S 先统计各种石头数据量
  let stoneHash = {};

  for (let i = 0; i < stones.length; i++) {
    let s = stones[i];
    if (stoneHash[s] !== void 0) {
      stoneHash[s]++;
    } else {
      stoneHash[s] = 1;
    }
  }

  let count = 0;
  // 从统计好的石头数中取值
  for (let i = 0; i < jewels.length; i++) {
    const s = jewels[i];
    if (stoneHash[s] !== void 0) {
      count += stoneHash[s];
    }
  }

  return count;
};
// @lc code=end
