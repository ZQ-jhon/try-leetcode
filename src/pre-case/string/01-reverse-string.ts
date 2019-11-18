import { TimeStatistics } from "../../../utils/time-log";

const TEST_CASE1 = ["h","e","l","l","o"];

// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

 

// 示例 1：

// 输入：["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]

/**
 * 禁止使用 reverse() 
 */

/**
 * 双指针对撞
 * O(T) = O(1)
 */

function reverseString(s: string[]) {
    let i = 0, j = s.length - 1;
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
    return s;
};

const t = new TimeStatistics(reverseString, [TEST_CASE1]);
t.executeTenThousandTimes();