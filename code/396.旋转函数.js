/*
 * @lc app=leetcode.cn id=396 lang=javascript
 *
 * [396] 旋转函数
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function (A) {
  // Bk是数组 A 顺时针旋转 k 个位置后的数组
  // F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1]
  // A = [4, 3, 2, 6] 则 B3 = [3,2,6,4]
  // B0 数组位置保持不动  B1 最后一个数字移到最前，B2 最后两个数字移动到最前

  // let max;
  // for (let i = 0, len = A.length; i < len; i++) {
  //   let A_1 = A.slice(0);
  //   let tmpArr = A_1.splice(-i);
  //   A_1 = tmpArr.concat(A_1);

  //   let fk = 0;
  //   for (let j = 0; j < len; j++) {
  //     fk += j * A_1[j];
  //   }

  //   if (fk > max || (!max && max !== 0)) {
  //     max = fk;
  //   }
  // }

  // return max || 0;

  // 上面的方法时间复杂度过高，且操作损耗很大，由于存在推导公式，所以可以通过公式得到规律
  // A = [4, 3, 2, 6], A_0=[4,3,2,6]，A_1=[6,4,3,2], A_2 = [2,6,4,3], A_3 = [3,2,6,4]
  if (A.length < 2) {
    return 0;
  }
  let totalA = 0,
    len = A.length,
    last_tmp = 0;

  for (let i = 0; i < len; i++) {
    totalA += A[i];
    last_tmp += i * A[i];
  }

  let max = -Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < len; i++) {
    last_tmp = last_tmp + totalA - A[len - 1] - (len - 1) * A[len - 1];
    A.unshift(A.pop());
    if (last_tmp > max) {
      max = last_tmp;
    }
  }
  return max;
};
// @lc code=end
