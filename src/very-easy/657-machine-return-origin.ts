
import { TimeStatistics } from '../../utils/time-log';

/**
 * O(t) = O(N)
 */

const TEST_CASE1 = 'LRUDDURL';
const TEST_CASE2 = '';

function judgeCircle (moves: string): boolean {
    let x = 0, y = 0;
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case "L":
                x -= 1;
                break;
            case "R":
                x += 1;
                break;
            case "U":
                y += 1;
                break;
            case "D":
                y -= 1;
                break;
        }
    }
    return x === 0 && y === 0;
};


const t1 = new TimeStatistics(judgeCircle, [TEST_CASE1]); // 3ms
t1.executeTenThousandTimes(); // 5ms


const t2 = new TimeStatistics(judgeCircle, [TEST_CASE2]); // 1ms
t2.executeTenThousandTimes(); // 1ms