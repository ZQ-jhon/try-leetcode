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
        const t = new Date().getTime();
        const result = cb.apply(null, params);
        console.log(`return:`, result);
        console.info(`timing:`, new Date().getTime() - t);
    }

    public executeTenThousandTimes() {
        const t = new Date().getTime();
        for(let i =0; i< 10000; i++) {
            this.cb.apply(null, this.params);
        }
        console.info(`10,000 Times spend ms:`, new Date().getTime() - t);
    }
}