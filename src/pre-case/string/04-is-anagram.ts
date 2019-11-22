import { TimeStatistics } from "../../../utils/time-log";

const string1 = 'anagram';
const string2 = 'nagaram';

// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false

// `❤`进阶:
// 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

/**
 * 解法1 hash 表存状态，有效降低复杂度
 * 这种方法可以有效的遍历 形如 "\u0080" 这种 unicode 字符
 * O(T) = O(N)
 */
function isAnagram(s: string, t: string) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
    }
    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            map.set(t[i], map.get(t[i]) - 1);
        } else {
            return false;
        }
    }

    for (let entry of map) {
        if (entry[1] !== 0) { return false; }
    }
    return true;

};

const t = new TimeStatistics(isAnagram, [string1, string2]); // 3.37 ms
t.executeTenThousandTimes(); // 22.637 ms

