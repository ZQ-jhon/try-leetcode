import { TimeStatistics } from "../../../utils/time-log";
const TEST_CASE1 = 'leetcode';
// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

// 案例:

// s = "leetcode"
// 返回 0.

// s = "loveleetcode",
// 返回 2.

/**
 * @depercated `错误解法`
 * 我考虑了快慢指针，但是思路有点歪了，姑且放上来吧
 */
function errorFunction(s: string) {
    // 开始赛跑
    let i = 0, j = 1;
    // 当快指针跑到终点，再折返到慢指针前面一位
    while (j < s.length - 1) {
        if (j === s.length - 1) {
            j = ++i;
        }
        // 如果相等，快指针继续跑
        if (s[i] === s[j]) {
            j++;
            continue;
        } else {
            return i;
        }

    }
    return -1;
}

/**
 * PS: 暴力 N^2 就不考虑了
 * 解法1 两头查，序号相等，说明唯一
 * 比较简单
 * O(T) = O(N)
 * 一次 AC
 * 
 */
function firstUniqChar(s: string) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
}

const t = new TimeStatistics(firstUniqChar, [TEST_CASE1]); // 2.2 ms
t.executeTenThousandTimes(); // 2.2 ms

/**
 * 解法二 hashMap
 * O(T) = O(N) + O(M) M < N 
 * 略慢于 解法1
 */
/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar1 (s: string) {
    const map = new Map();
    for(let i = 0; i < s.length; i ++) {
      map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
    }
    
    for(let entry of map) {
      if(entry[1] === 1) {
        return s.indexOf(entry[0]);
      }
    }
    
    return -1;
    
  };

const t1 = new TimeStatistics(firstUniqChar1, [TEST_CASE1]); // 0.4 ms
t1.executeTenThousandTimes(); // 9.1 ms
