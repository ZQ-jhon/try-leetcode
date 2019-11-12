import { TimeStatistics } from '../../../utils/time-log';

// 题目:
// 原地算法
// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
// 示例 1:
// 给定数组 nums = [1, 1, 2],
// 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
// 你不需要考虑数组中超出新长度后面的元素。


const TEST_CASE1 = [1, 1, 2];

/**
 * 与单链表判断 是否有环 的思路类似
 * ```javascript
 * const node = new Node();
 * let slow = node, fast = node;
 * 
 * // 迭代条件为，快指针没有撞墙，还能继续跑
 * while(fast && fast.next) {
 *   // slow 指针每次 stepper 为 1
 *   slow = slow.next;
 *   // fast 指针每次 stepper 为 2
 *   fast = fast.next.next; 
 *   if(slow === fast) {
 *     // 指针赛跑的过程中，出现了相撞，说明该链表有环
 *     return true;
 *    }
 * }
 * ```
 * 那么，同理，快慢指针依然可以用来处理数组中重复的元素，步骤如下：
 * 1. 将慢指针钉在起始标志位，快指针每次步进 1
 * 2. 当 slow 指针和 fast 指针指向的值相同，size 一直保持不变，举个例子，[1,1,1,1,1,1,1,1,1...] 无穷多个1，最后 size = 0, 应该 return size+1 = 1
 * 3. 当 slow 指针和 fast 指针指向的值不同，size 自增，并在行走的过程中，将每一步的落脚点，改为这个【特殊的，没有重复的元素】
 */
function removeDuplicates(arr: Array<number>): number {
    // 指针 size 用来处理元素, 其本身的值 代表了 唯一成员 的数目，并自增
    let size = 0;
    // 指针 i 用来遍历 
    for (let i = 0; i < arr.length; i++) {
        // console.log(`i , ${i}`, `size, ${size}`);
        if (arr[size] !== arr[i]) {
            // size 指针右移，动态修改数组的元素，从 ++size 下标开始
            // console.log(`处理完成：i , ${i}`, `size, ${size}`);
            arr[++size] = arr[i];
        }
    }
    return size + 1;
};

const t1 = new TimeStatistics(removeDuplicates, [TEST_CASE1]);
t1.executeTenThousandTimes();