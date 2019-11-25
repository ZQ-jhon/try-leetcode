import { TimeStatistics } from "../../../utils/time-log";
const TEST_CASE1 = ['hello', 'll'];
// 实现 strStr() 函数。

// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

// 示例 1:

// 输入: haystack = "hello", needle = "ll"
// 输出: 2
// 示例 2:

// 输入: haystack = "aaaaa", needle = "bba"
// 输出: -1
// 说明:

// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。


/**
 * 解释：其实就是实现 indexOf
 * 思路，找到每个在 haystack 中出现的 needle[0] 的 index, 再多次切片，进行判断
 * 一次 AC
 * O（T） = O（N）
 */
function strStr(haystack: string, needle: string) {
    // 边界判断
    if (needle.length > haystack.length) return -1;
    if (needle.length === 0) return 0;
    // 循环找子集，标识符为 needle[0]
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            const matchedString = haystack.substr(i, needle.length);
            if (matchedString === needle) { return i; }
        }
    }
    return -1;
}

const t = new TimeStatistics(strStr, TEST_CASE1); // 2.00 ms
t.executeTenThousandTimes(); // 2.88 ms