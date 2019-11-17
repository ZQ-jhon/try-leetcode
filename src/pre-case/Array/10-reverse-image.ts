import { TimeStatistics } from "../../../utils/time-log";

const TEST_CASE1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// 给定 matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// 原地旋转输入矩阵，使其变为:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]


/**
 * 思路:
 * [
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ]
 * 
 * 通过矩阵转置，得：
 * [
 *   [1, 4, 7],
 *   [2, 5, 8],
 *   [3, 6, 9]
 * ]
 * 
 * 单行 reverse, 得：
 * [
 *   [7, 4, 1],
 *   [8, 5, 2],
 *   [9, 6, 3]
 * ]
 * 
 * 这种方法，就是投机取巧，没有直接的面对问题
 * 而是分治转化，第一步的矩阵转置的操作，相当于已经 顺时针 90 dec + 单行 reverse
 * 所以，还需要单独的对每行进行 reverse
 * 
 * 如果这里要进行 90 ° 的 n(n > 1 && n < 4) 倍转换，则不适用
 * 因此，面对不同的转动度数，应该不同的进行分析 @see method `rotate270`
 * 
 * 
 * O(T) = O(N^2) + O(N) = O(N^2)
 */
function rotate90(matrix: number[][]) {
    const len = matrix.length;
    // 开始转置, 最外层遍历子数组
    for (let i = 0; i < len; i++) {
        const rowLen = matrix[i].length;
        // 内层遍历每个子数组的内部元素
        for (let j = i; j < rowLen; j++) {
            // [1, 0] 坐标 和 [0, 1] 坐标互换，以此类推  
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // 转置完成

    // 每行中点翻转
    return matrix.map(arr => arr.reverse());
};

const t = new TimeStatistics(rotate90, [TEST_CASE1]);
t.executeTenThousandTimes();



/**
 * 给定图像：
 * [
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ]
 * 
 * 期望值：
 * [
 *   [3, 6, 9],
 *   [2, 5, 8]
 *   [1, 4, 7]
 * ]
 * 
 * 翻转 270° = -90° + 360°
 * 因此，只需要逆时针旋转 90° 即可
 * 
 * 同理，先转置，得：
 * [
 *   [1, 4, 7],
 *   [2, 5, 8],
 *   [3, 6, 9]
 * ]
 * 
 * 然后，对 最外层的 数组 reverse 即可
 *  
 */

function rotate270(matrix: number[][]) {
    const len = matrix.length;
    for (let i = 0; i < len; i++) {
        const rowLen = matrix[i].length;
        for (let j = i; j < rowLen; j++) {
            // [1, 0] 坐标 和 [0, 1] 坐标互换，以此类推  
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    return matrix.reverse();
}