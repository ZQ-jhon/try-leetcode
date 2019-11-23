import { TimeStatistics } from "../../../utils/time-log";
const TEST_CASE1 = "A man, a plan, a canal: Panama";
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false



/**
 * 解法一，效率比较低
 * O（T） = O（N）
 */
function isPalindrome1(s: string) {
    const source = s.toLowerCase().split('').filter(_ => /\w|\d/.test(_)).join('');
    const reverse = s.toLowerCase().split('').filter(_ => /\w|\d/.test(_)).reverse().join('');
    console.log(reverse, source);
    return reverse === source;
}

// const t1 = new TimeStatistics(isPalindrome1, [TEST_CASE1]);
// t1.executeTenThousandTimes();



/**
 * 直接取 ASCII 中 0-9 及 a-Az-Z 的数值，append to 队列(也可以用正则判断)
 * Tips:
 * 0 => ASCII 48
 * 9 => ASCII 57
 * A => ASCII 65
 * Z => ASCII 90
 * a => ASCII 97
 * z => ASCII 122
 * 然后倒叙遍历，依次比较
 * O(T) = O(N) + O(N) = O(N)
 */
function isPalindrome2(s: string) {
    // 姑且按照 48 - 122 区间来取
    const isValidCharacter = (c: string) => {
        return (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 122) ? c.charCodeAt(0) : null;
    }
    const arr: number[] = [];
    for (let i = 0; i < s.length; i++) {
        const valid = isValidCharacter(s[i]);
        if (valid) {
            arr.unshift(valid);
        }
    }
    return [...arr].join('') === arr.join('');
}

const t2 = new TimeStatistics(isPalindrome2, [TEST_CASE1]);
t2.executeTenThousandTimes();