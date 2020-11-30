/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  // 第一遍 使用 BFS
  // 基因序列串中的每一个字符都要依次改变，检查改变一次后是否满足
  // 改变一次不满足时，再修改另外一个，直到找到满足条件的
  if (bank.length <= 0) {
    return -1;
  }
  if (start === end) return 0;
  let ans = 0;
  let queue = [start];
  let gen = ['A', 'C', 'G', 'T'];
  // 将基因库的数据转成hash降低查询时间
  let bankHash = {};
  // for...of 直接获取值
  for (const iterator of bank) {
    bankHash[iterator] = true;
  }
  while (queue.length) {
    // 这里的逻辑类似于层序遍历
    for (let i = 0, m = queue.length; i < m; i++) {
      let cur = queue.pop();
      if (cur === end) {
        return ans;
      }
      let curCopy = cur.split('');
      for (let j = 0, n = curCopy.length; j < n; j++) {
        for (let k = 0, o = gen.length; k < o; k++) {
          // @优化 相同则跳过
          if (curCopy[j] === gen[k]) {
            continue;
          }
          // 基因改变一次
          curCopy[j] = gen[k];
          let curStr = curCopy.join('');
          // 判断是否合法
          if (bankHash[curStr]) {
            queue.unshift(curStr);
            // 去重
            delete bankHash[curStr];
          }
        }
        // 复原，准备改下一个基因
        curCopy[j] = cur[j];
      }
    }

    ans++;
  }
  return -1;
};
// @lc code=end
