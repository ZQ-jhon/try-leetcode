import { TimeStatistics } from "../../../utils/time-log";


const TEST_CASE1 = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
// 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。

// 如图所示： [图示](https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/1/array/30/)

/**
 * 
 * [
 *   ["8","3",".",".","7",".",".",".","."],
 *   ["6",".",".","1","9","5",".",".","."],
 *   [".","9","8",".",".",".",".","6","."],
 *   ["8",".",".",".","6",".",".",".","3"],
 *   ["4",".",".","8",".","3",".",".","1"],
 *   ["7",".",".",".","2",".",".",".","6"],
 *   [".","6",".",".",".",".","2","8","."],
 *   [".",".",".","4","1","9",".",".","5"],
 *   [".",".",".",".","8",".",".","7","9"]
 * ]
 * 
 */

/**
 * O(T) = O(n^2) 
 */
function isValidSudoku(arr: Array<Array<number | '.'>>) {
    for (let i = 0; i < 9; i++) {
        // 遍历行*列
        const row = new Set(), col = new Set();
        for (let j = 0; j < 9; j++) {
            if (typeof arr[i][j] === 'number') {
                // TODO: 多行的状态为什么只用一个 set 就可以保存 ?
                if (row.has(arr[i][j])) return false
                row.add(arr[i][j])
            }
            if (typeof arr[i][j] === 'number') {
                if (col.has(arr[j][i])) return false
                col.add(arr[j][i])
            }
        }
        // 遍历3*3小宫格
        const block = new Set();
        // 0-2 是第一个数独的 x 坐标区间， 3-5 是第二个，以此类推
        let x = (Math.floor(i / 3)) * 3, y = i % 3 * 3
        for (let j = 0; j < 9; j++) {
            if (typeof arr[x][y] === 'number') {
                if (block.has(arr[x][y])) return false
                block.add(arr[x][y])
            }
            y++
            if ((j + 1) % 3 === 0) {
                x += 1
                y -= 3
            }
        }
    }
    return true
}



const t = new TimeStatistics(isValidSudoku, [TEST_CASE1]);
t.executeTenThousandTimes();