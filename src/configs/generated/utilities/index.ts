/* eslint-disable @typescript-eslint/no-require-imports */
/**
* AUTO GENERATED
* <---DO NOT MODIFY THIS FILE--->
*/

export * from './types';

let utilities: any; // Use 'any' or a specific type if you know it

// Use dynamic import instead of require
if (process.env.NODE_ENV === 'production') {
  import('./shakenUtilities').then(module => {
    utilities = module.utilities;
  });
} else {
  import('./utilities').then(module => {
    utilities = module.utilities;
  });
}

// Export the utilities after they are set
export { utilities };

// Define the type for UtilitiesType
export type UtilitiesType = typeof utilities;

