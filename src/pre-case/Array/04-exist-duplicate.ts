import { TimeStatistics } from '../../../utils/time-log';

const TEST_CASE = [1,2,3,4,5,1];
// 给定一个整数数组，判断是否存在重复元素。

// 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

// 示例 1:

// 输入: [1,2,3,1]
// 输出: true

// 示例 2:

// 输入: [1,2,3,4]
// 输出: false

/**
 * 解法 1
 * O(T)= O(N)
 * 刚拿到题，觉得很简单
 * 仔细一看，发现事情并不简单，如果采用常规的变量存储，甚至数组存储，似乎最终都难逃 O(N)
 * 于是乎，对数组先进行预处理，排序完成后：
 * 如果相邻两兄弟值一样，直接返回 true
 * 否则，等迭代完成，返回 false
 * 
 * 
 * 执行用时 : 116 ms , 在所有 javascript 提交中击败了41.55% 的用户
 * 内存消耗 :40 MB , 在所有 javascript 提交中击败了46.93% 的用户
 * 
 * 
 * 这个方法的弊端在于:
 * 1 .如果数据量非常庞大，preset sort 会浪费大量的时间 , 然而 sort 对于最终返回的 布尔值 没有任何关联意义
 * 2. 如果不想改变原始输入，必须拷贝数组
 */
function containsDuplicate1(nums: number[]): boolean {
    if (nums.length <= 1) { return false; }
    const copy = [...nums];
    copy.sort((a, b) => a - b);
    for (let i = 0; i < copy.length; i++) {
        if (i > 0 && copy[i - 1] === copy[i]) { return true; }
    }
    return false;
};
const t1 = new TimeStatistics(containsDuplicate1, [TEST_CASE]);
t1.executeTenThousandTimes();


/**
 * 解法 2
 * O(T) = O(N)
 * 
 * 老规矩，哈希表存状态
 * 执行用时 : 76 ms , 在所有 javascript 提交中击败了 91.31% 的用户 
 * 内存消耗 : 40.6 MB , 在所有 javascript 提交中击败了41.49% 的用户
 */
function containsDuplicate2(nums: number[]): boolean {
    // 每个成员作为 key, value 不重要
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true;
        } else {
            map.set(nums[i], 1);
        }
    }
    return false;
}

const t2 = new TimeStatistics(containsDuplicate1, [TEST_CASE]);
t2.executeTenThousandTimes();


/**
 * 解法 3 
 * O(T) = O(1)
 * 用 Set(nums) === Array(nums) 来判断
 * 真·暴力
 * 
 * 执行用时 : 68 ms, 在所有 javascript 提交中击败了 97.55% 的用户 
 * 内存消耗 : 39.8 MB, 在所有 javascript 提交中击败了52.10% 的用户
 */
function containsDuplicate3(nums: number[]): boolean {
    return new Set(nums).size !== nums.length;
}

const t3 = new TimeStatistics(containsDuplicate1, [TEST_CASE]);
t3.executeTenThousandTimes();