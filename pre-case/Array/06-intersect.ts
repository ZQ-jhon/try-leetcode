import { TimeStatistics } from "../../utils/time-log";
const TEST_CASE1 = [[1, 2, 2, 3, 4, 5, 7, 8, 9], [2, 4, 8, 9]];
// 给定两个数组，编写一个函数来计算它们的交集。
// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [4,9]

/**
 * 读了半天题目，没读懂
 * 
 * [1,2,3,4,4,4,4,4,4,4,5,6,7,8,9]
 * [7,4,8,5,9]
 * 
 * 后来看明白了，求的是最大无序交集
 * 思路还是 map，降低复杂度
 */

/**
 * O(T) = O(N+N) = O(2N) = O(N)
 */
function intersect(arr1: number[], arr2: number[]): number[] {
    const map = new Map<number, number>();
    const result: number[] = [];
    // 建立索引
    arr1.forEach(v => map.has(v) ? map.set(v, map.get(v) as number + 1) : map.set(v, 1));
    // 每次有相同的，就 push，并抹去一次对应的 duplicate record
    arr2.forEach(v => {
        if (map.get(v) as number > 0) {
            map.set(v, map.get(v) as number - 1);
            result.push(v);
        }
    });
    return result;
}

const t = new TimeStatistics(intersect, TEST_CASE1); // 3.6 ms
t.executeTenThousandTimes(); // 7.7 ms