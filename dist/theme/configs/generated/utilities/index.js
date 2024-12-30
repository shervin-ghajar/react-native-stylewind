/* eslint-disable @typescript-eslint/no-require-imports */
/**
* AUTO GENERATED
* <---DO NOT MODIFY THIS FILE--->
*/
export * from './types';
let utilities;
if (process.env.NODE_ENV === 'production') {
    utilities = require('./shakenUtilities').utilities;
}
else {
    utilities = require('./utilities').utilities;
}
export { utilities };
