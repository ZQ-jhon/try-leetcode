// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。

/**
 * 错误示范
 * 
 */
function longestCommonPrefix (strs: string[]) {
    if(strs.length === 0) { return ''; }
    if(strs.length === 1) { return strs[0]; }
    // 最大公共长度取决于最短单词
    const len = Math.min(...strs.map(s => s.length));
    for(let i = 0 ; i < len ; i ++) {
      const matches = strs.map(word => word[i]);
      if([...new Set(matches)].length === 1) {
        continue;
      } else {
        return strs[0].substring(0, i);
      }
    }
  return '';
};