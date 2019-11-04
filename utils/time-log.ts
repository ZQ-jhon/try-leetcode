/**
 * @Useage import { TimeStatistics }
 * new TimeStatistics(myFun,[arg1, arg2]);
 */
export class TimeStatistics {
    private cb: Function;
    private params: any[];
    constructor(cb: Function, params: any[]){
        this.cb = cb;
        this.params = params;
        console.time('timing');
        const result = cb.apply(null, params);
        console.log(`return:`, result);
        console.timeEnd('timing');
    }

    public executeTenThousandTimes() {
        console.time('10,000 Times spend ms:');
        for(let i =0; i< 10000; i++) {
            this.cb.apply(null, this.params);
        }
        console.timeEnd('10,000 Times spend ms:');
    }
}