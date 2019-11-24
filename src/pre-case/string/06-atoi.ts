import { TimeStatistics } from "../../../utils/time-log";
const TEST_CASE1 = '     -44 wadwd';

// 题干太长，不复制了，直接在这里看吧
// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/37/

/**
 * 思路：正则提取合法数字，在进行输出
 * 如果遇到溢出，直接用 Math.max 和 Math.min 取即可
 */
function myAtoi(str: string) {
    // 先 trim，再进行开头匹配，这样不用考虑形如：
    // 'abc  123' 这种情况，当然了，这种情况可以使用正则断言的手段来处理
    const result = str.trim().match(/^(-|\+)?\d+/g);
    return result
        ? Math.max(Math.min(Number(result[0]), 2 ** 31 - 1), -(2 ** 31))
        : 0;
};

const t  = new TimeStatistics(myAtoi, [TEST_CASE1]); // 2.12 ms
t.executeTenThousandTimes(); // 4.33 ms
