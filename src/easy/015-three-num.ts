import  { TimeStatistics } from '../../utils/time-log';
const TEST_CASE = [[-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]];

/**
 * @medium qustion
 * O(t)= O(n²)
 */
function threeSum(nums: number[]): Array<number[]> {
    // 最左侧值为定值，右侧所有值进行两边推进计算
    const result = [];
    nums.sort((a,b) => a-b);
    const size = nums.length;
    // 保证有正数负数
    if (nums[0] * nums[size - 1] <= 0) {
      let i = 0;
      while (i < size - 2) {
        let first = i + 1;
        let last = size - 1;
        while (first < last) {
          let sum = nums[i] + nums[first] + nums[last];
          if (sum === 0) {
            result.push([nums[i], nums[first], nums[last]]);
          }
          if (sum <= 0) {
            // 负数过小，first右移
            while (nums[first] === nums[++first]) {} // 重复值跳过
          } else {
            while (nums[last] === nums[--last]) {} // 重复值跳过
          }
        }
        while (nums[i] === nums[++i]) {}
      }
    }
    return result;
  };


  const t1 = new TimeStatistics(threeSum, TEST_CASE);
  t1.executeTenThousandTimes();