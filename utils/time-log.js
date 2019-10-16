"use strict";
exports.__esModule = true;
/**
 * @Useage import { TimeStatistics }
 * new TimeStatistics(myFun,[arg1, arg2]);
 */
var TimeStatistics = /** @class */ (function () {
    function TimeStatistics(cb, params) {
        this.cb = cb;
        this.params = params;
        var t = new Date().getTime();
        var result = cb.apply(null, params);
        console.log("return:", result);
        console.info("timing:", new Date().getTime() - t);
    }
    TimeStatistics.prototype.executeTenThousandTimes = function () {
        var t = new Date().getTime();
        for (var i = 0; i < 10000; i++) {
            this.cb.apply(null, this.params);
        }
        console.info("10,000 Times spend ms:", new Date().getTime() - t);
    };
    return TimeStatistics;
}());
exports.TimeStatistics = TimeStatistics;
