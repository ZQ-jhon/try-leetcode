"use strict";
exports.__esModule = true;
var time_log_1 = require("../../utils/time-log");
var TEST_CASE = [[2, 7, 11, 15], 9];
/**
 *  O(t) = O(N²)
 */
function twoSum(nums, target) {
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                arr.push([nums[i], nums[j]]);
            }
        }
    }
    return arr;
}
;
// const t1 = new TimeStatistics(twoSum, TEST_CASE);
// t1.executeTenThousandTimes();
/**
 * O(t) = O(n)
 */
function twoSum2(num, target) {
    var map = new Map();
    for (var i = 0; i < num.length; i++) {
        if (map.has(target - num[i])) {
            return [map.get(target - num[i]), i];
        }
        map.set(num[i], i);
    }
}
var t2 = new time_log_1.TimeStatistics(twoSum2, TEST_CASE);
t2.executeTenThousandTimes();
