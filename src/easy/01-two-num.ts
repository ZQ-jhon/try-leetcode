import { TimeStatistics } from '../../utils/time-log';
const TEST_CASE = [[2, 7, 11, 15], 9];
/**
 * @easy
 *  O(t) = O(N²)
 */
function twoSum(nums: number[], target: number) {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                arr.push([nums[i], nums[j]]);
            }
        }
    }
    return arr;
};

console.log(`twoSum1 stdout:`)
const t1 = new TimeStatistics(twoSum, TEST_CASE);
t1.executeTenThousandTimes();


/**
 * @easy
 * O(t) = O(n)
 */

function twoSum2(num: number[], target: number) {
    if (!Array.isArray(num) || num.length === 0 || !num.every(i => typeof i === 'number')) {
        return [];
    }
    // store value-index entries of num.
    const map = new Map();
    for (let i = 0; i < num.length; i++) {
        const otherValue = target - num[i];
        // 如果存在这样能够直接和当前 value 组成最终 target 的 下标值
        if (map.has(otherValue)) {
            return [map.get(otherValue), i]
        }
        map.set(num[i], i);
    }
}

console.log(`twoSum2 stdout:`)
const t2 = new TimeStatistics(twoSum2, TEST_CASE);
t2.executeTenThousandTimes();