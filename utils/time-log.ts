import { green, blue, white, yellow } from 'chalk';

/**
 * @Useage import { TimeStatistics }
 * new TimeStatistics(myFun,[arg1, arg2]);
 */
export class TimeStatistics {
    private cb: Function;
    private params: any[];
    constructor(cb: Function, params: any[]) {
        this.cb = cb;
        this.params = params;
        console.time(`${blue(this.cb.name)}: 1 executed times:`);
        const result = cb.apply(null, params);
        console.log(`[${yellow(this.cb.name + 'return')}]`, white(result));
        console.timeEnd(`${blue(this.cb.name)}: 1 executed times:`);
    }

    public executeTenThousandTimes() {
        console.time(`[${blue(this.cb.name)}]: 10,000 execute times:`);
        for (let i = 0; i < 10000; i++) {
            this.cb.apply(null, this.params);
        }
        console.timeEnd(`[${blue(this.cb.name)}]: 10,000 execute times:`);
    }
}