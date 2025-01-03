/**
 * AUTO GENERATED
 * <---DO NOT MODIFY THIS FILE--->
 */

export * from './types';

let utilities: any; // Use 'any' or a specific type if you know it

// Use dynamic import instead of require
if (process.env.NODE_ENV === 'production') {
  import('./shakenUtilities').then((module) => {
    console.log('shakenUtilitiesPath', module);
    utilities = module.utilities;
  });
} else {
  import('./utilities').then((module) => {
    console.log('utilitiesPath', module);
    utilities = module.utilities;
  });
}

// Export the utilities after they are set
export { utilities };

// Define the type for UtilitiesType
export type UtilitiesType = typeof utilities;
