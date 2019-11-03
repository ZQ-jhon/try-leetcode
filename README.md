## Why i create this repository ?
The thinking of my leetcode road, about base algorithm in work.

## How to statistics execute time in my algorithm function ?
```typescript
// import timer tool
import { TimeStatistics } from 'utils/time-log';
const timer = new TimeStatistics(test_method, [test_case1, test_case2...]);
```
then, open cmd and run:
```bash
ts-node your_methodFile.ts_path
```
