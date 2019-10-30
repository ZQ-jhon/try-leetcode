import { TimeStatistics } from "../../utils/time-log";

/* 原地算法
给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
示例 1:
给定数组 nums = [1, 1, 2],

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。

你不需要考虑数组中超出新长度后面的元素。 */
// TODO: deep learn


const TEST_CASE1 = [1, 1, 2];

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