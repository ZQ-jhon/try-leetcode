// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321

/**
 * 不考虑溢出，只是简单替换，可以这么写
 */
function reverseInteger1(x: number) {
    x = x < 0 ? -x : x;
    const arr = String(x).split('');
    let i = 0, j = arr.length - 1;
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    if (x < 0) {
        arr.unshift('-');
    }
    console.log(arr);
    arr.join('');
    return +arr;
}



/**
 * 字符串反转+溢出判断
 */
function reverseInteger(x: number) {
    let a = x < 0 ? '-' : '';
    let data = Math.abs(x).toString().split('');
    if (data.length < 2) { return x; }

    a = a + data.reverse().join('');
    if (Number(a) > (Math.pow(2, 31) - 1) || Number(a) < Math.pow(-2, 31)) {
        return 0
    } else {
        return a
    }
}
