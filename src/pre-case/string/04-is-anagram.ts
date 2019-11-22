import { TimeStatistics } from "../../../utils/time-log";

const string1 = 'anagram';
const string2 = 'nagaram';

const unicode1 = '\u0080\u0079\u0088';
const unicode2 = '\u0088\u0080\u0079';

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

const t1 = new TimeStatistics(isAnagram, [string1, string2]); // 3.37 ms
t1.executeTenThousandTimes(); // 22.637 ms

const t2 = new TimeStatistics(isAnagram, [unicode1, unicode2]); // 0.575 ms
t2.executeTenThousandTimes(); // 2.786 ms

/**
 * 解法2: 将所有的字符，不管 unicode 还是其他字符，直接转成对应的 unicode 编码序号
 * `string.prototype.charCodeAt`
 * 
 * 如图：![precase-string-04](../../../assets/images/precase-string-04.png)
 * 原理：将转置后的数组，规约求和，看入参的两个 string 是否相等，简约📚，🙅‍不简单
 * 
 * 评价：这种方法会有异常情况，考虑：
 *  s = 'ac', t = 'bb'
 *  accS = 196, accT = 196
 *  因此会有异常情况
 * O(T) = O(N)
 */
function isAnagram2(s: string, t: string) {
    const parse = (str: string) => str.split('').map(c => c.charCodeAt(0)).reduce((acc, next) => acc += next);
    return parse(s) === parse(t);
}

const t3 = new TimeStatistics(isAnagram2, [string1, string2]); // 0.606 ms
t3.executeTenThousandTimes(); // 13.875 ms

const t4 = new TimeStatistics(isAnagram2, [unicode1, unicode2]); // 0.631
t4.executeTenThousandTimes(); // 4.795