import { TimeStatistics } from '../../utils/time-log';

/**
 * O(t) = O(2^n)
 * @function fibonacci
 * @param n as index of latest fibonacci member what to explore
 * @like [0,1,1,2,3,5,8,13,21,34,55,89...]
 * @example f(0)=0 f(1)=1 f(3)=2 f(4)=3
 */
function fibonacci(n: number): number {
    if (n <= 0) return 0;
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// if n > 40, it's will be crash with [Error: Max callstack overflow...]
const t = new TimeStatistics(fibonacci, [20]); // 3 ms
t.executeTenThousandTimes(); // 743 ms


// consider a better way...


/**
 * dynamic programming
 * O(t) = O(n)
 */
function fibonacci2(n: number): number {
    if (n === 0) { return 0; }
    let prev = 0, next = 1;
    for (let i = 1; i < n; i++) {
        // 状态转移方程
        [prev, next] = [next, prev + next];
    }
    return next;
}

const t2 = new TimeStatistics(fibonacci2, [20]); // 1ms
t2.executeTenThousandTimes(); // 5 ms


/**
 * O(t) = O(logn)
 * advanced using case: Martrix
 */

function fibonacci3() {
    // TODO: Relearn knowledge about martrix.
}    