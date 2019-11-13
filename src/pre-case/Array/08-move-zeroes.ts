import { TimeStatistics } from "../../../utils/time-log";

const TEST_CASE = [0, 1, 0, 3, 12];


/**
 * 错误解法 1：
 * Input [0,1,0,3,12]
 * Output [12,1,3,0,0]
 * 
 * 正确答案 [1,3,12,0,0]
 * 
 * 
 * 错误思路分析:
 * 碰撞双指针思路，每次 left 指针跟 right 指针作比较：
 * 如果 left = 0, 直接 left,right 互换位置，当 right 为0，让 right 自减
 * 错误点： 只考虑把 0 放最后，但是没有考虑原本数组的排序，直接暴力的替换位置，是不可行的
 * 
 */
function errorFunction(nums: number[]) {
    let j = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        if (i === j) {
            return nums;
        }
        if (nums[i] === 0) {
            if (nums[j] === 0) {

                j--;
            }
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i--;
        }
    }
    return nums;
};



/**
 * 解法1：
 * O(T) = O(N)
 * 
 * 思路，还是使用双指针，快慢指针
 * 
 * 1. 将所有不为 0 的数，挨个往前推
 * 2. j 每次步进的位置都是安全的，被 i 踩过的安全数字(不安全的，已经被替换了)
 * 
 * 
 */
function moveZeroes(nums: number[]) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        // 当快指针不为0
        if (nums[i] != 0) {
            // 两个指针没有相撞
            if (i != j) {
                // 当 nums[j] = 0, 那么这次交换是 0 与普通数字交换
                // 当 nums[j] !== 0, 那么这次交换是
                [nums[j], nums[i]] = [nums[i], nums[j]];
            }
            j++;
        }
    }
    return nums;
};

const t1 = new TimeStatistics(moveZeroes, [TEST_CASE]);
t1.executeTenThousandTimes();



/**
 * 
 * 解法2：将所有为 0 的位置，抽出来，挨个 append to tail
 * 
 * O(T) = O(N) + O(N) = O(N)
 * 
 */
function moveZeroes2(nums: number[]) {
    const len = nums.length;
    for (let i = len - 1; i >= 0; i -= 1) {
        if (nums[i]) continue;
        nums.push(...nums.splice(i, 1));
    }
    return nums;

}

const t2 = new TimeStatistics(moveZeroes2, [TEST_CASE]); // 0.45 ms
t2.executeTenThousandTimes(); // 2.89 ms