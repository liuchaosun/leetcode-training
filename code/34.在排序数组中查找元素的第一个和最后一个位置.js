/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function (nums, target) {
//   let res = [-1, -1];
//   if (nums.length === 0) {
//     return res;
//   }

//   // 递归函数
//   function Search(list, t, b) {
//     // 如果等于向左找第一个，向右找最后一个
//     if (list[t] === target) {
//       // 向左搜索
//       let l = t;
//       while (l >= 0 && list[l - 1] === target) {
//         l--;
//       }
//       res[0] = l + b;
//       // 向右搜索
//       let r = t;
//       while (r < list.length && list[r + 1] === target) {
//         r++;
//       }
//       res[1] = r + b;
//       return;
//     }
//     // 边界判断
//     if (t === 0 || res[0] !== -1) {
//       return;
//     }
//     // 如果不相等 二分
//     let ll = list.slice(0, t);
//     let llm = Math.floor(ll.length / 2);
//     Search(ll, llm, b);

//     let lr = list.slice(t);
//     let lrm = Math.floor(lr.length / 2);
//     Search(lr, lrm, b + t);
//   }

//   // 二分法查找中间值
//   let mid = Math.floor(nums.length / 2);
//   Search(nums, mid, 0);

//   return res;
// };

var searchRange = function (nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }

  let first = -1;
  let last = -1;

  // 简单遍历解法
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === target) {
  //     first = last = i;
  //     while (nums[last + 1] === target) {
  //       last++;
  //     }
  //     break;
  //   }
  // }

  // 简单遍历变种
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === target) {
      first = index;
      break;
    }
  }
  if (first === -1) {
    return [-1, -1];
  }
  for (let index = nums.length - 1; index >= first; index--) {
    if (nums[index] === target) {
      last = index;
      break;
    }
  }

  return [first, last];
};

// @lc code=end
