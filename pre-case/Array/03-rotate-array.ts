// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]

// 要求 时间复杂度 O(T) = O(1)

/**
 * 尽可能想出更多的解决方案，至少有 **三种不同的方法** 可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的 原地 算法。
 */

const TEST_CASE = [[1, 2, 3, 4, 5, 6, 7], 2];


/**
 * 解法 1 整块切块，从头插入
 * O(1)
 */
function rotateArray1(nums: number[], k: number): number[] {
    // 从下标 k 到 nums[length-1] 切下来的块
    const spliceArray = nums.splice(nums.length - k);
    nums.unshift(...spliceArray);
    return nums;
}

/**
 * 解法 2 单个拿出，逐个插入
 */
function rotateArray2(nums: number[], k: number): number[] {
    // 从最后一个切，切 K 次
    for (let i = 0; i < k; i++) {
        const spliceNumber = nums.pop() as number;
        // 每次切完，插进去
        nums.unshift(spliceNumber);
    }
    return nums;
}

/**
 * 直接站在上帝视角，倒着数出后 K 位, 从 K 下标一刀切成两半
 * 然后将 N-k 放在左边， 后 K 位 放在右边
 * 其实就是考 API, 没啥好说的， 即：
 * slice(闭区间，开区间)
 * splice(起始位，删除的个数，要替换的项)
 */
function rotateArray3(nums: number[], k: number): number[] {
    const len = nums.length;
    return [...nums.slice(len - k, len), ...nums.slice(0, k + 1)];
}