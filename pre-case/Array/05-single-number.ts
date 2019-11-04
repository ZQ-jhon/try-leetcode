// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
// 示例 1:

// 输入: [2,2,1]
// 输出: 1
// 示例 2:

// 输入: [4,1,2,1,2]
// 输出: 4

import { TimeStatistics } from '../../utils/time-log';
import { SINGLE_TEST_CASE } from '../../test_case/pre-case-array-05-single-number';

/**
 * 老套路，在不适用嵌套循环的条件下，哈希表是常见的解法
 * O(T) = O(N)
 * 运算时间 88ms
 */
function singleNumber1(nums: number[]) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.has(nums[i]) ? map.delete(nums[i]) : map.set(nums[i], i);
    }
    for (let k of map.keys()) {
        return k;
    }
};

const t1 = new TimeStatistics(singleNumber1, [SINGLE_TEST_CASE]); // 3 ms
t1.executeTenThousandTimes(); // 1759.96 ms


/**
 * O(T) = O(n)
 * 数学公式: 2∗(a+b+c)−(a+a+b+b+c)=c
 * 
 */
function singleNumber2(nums: number[]) {
    const copy = [...new Set(nums), ...new Set(nums)];
    for (let i = 0; i < nums.length; i++) {
        if (copy.indexOf(nums[i]) >= 0) {
            copy.splice(copy.indexOf(nums[i]), 1);
        }
    }
    return copy[0];
}


const t2 = new TimeStatistics(singleNumber2, [SINGLE_TEST_CASE]); // 7 ms
t2.executeTenThousandTimes(); // 39219.384 ms

/**
 * 异或运算
 * 相同为 0  a^a = 0;
 * 不同为 1  a^b = 1;
 * 举例：
 * 1. 十进制的 4 和 5 进行异或运算，即 100
 *                                101
 *                              = 001 = 1
 * 2. 十进制的 10 和 2 进行异或运算， 即 1010
 *                         （高位补0）  0010
 *                                   = 1000 = 2**3 = 8 
 * O(T) = O(N)
 * 
 */

function singleNumber3(nums: number[]) {
    let s = 0;
    for (let i in nums) {
        /**
         * 当 s 不断异或于累计的和，假设贪心条件下，形如 [1,1,2,2,3]
         * 那么，前 length -1 项的和终究为 0，到最后一个元素时，结果为 3
         */
        s ^= nums[i];
    }
    return s;
}

const t3 = new TimeStatistics(singleNumber3, [SINGLE_TEST_CASE]); // 2.9 ms
t3.executeTenThousandTimes(); // 933.84 ms


/**
 * 总结：
 * 通过观察三个方法的运算时间，不难得出
 * 1. 哈希表总是能够以最简单的方式降低时间复杂度
 * 2. 异或运算没有 API 封装，直接是数学计算，没有冗余，也不需要额外的空间（O(1)可忽略），所以最快
 * 3. 数学法去重，思路也不错，但是代码执行时，会有大量的无用操作，比如数组 splice，当 length 很大时，时间消耗非常大，而且也没有意义
 */