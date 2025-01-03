/**
 * AUTO GENERATED
 * <---DO NOT MODIFY THIS FILE--->
 */

export * from './types';

// Use dynamic import instead of require
export async function getUtilities() {
  let utilities: any; // Use 'any' or a specific type if you know it

  if (process.env.NODE_ENV === 'production') {
    await import('./shakenUtilities').then((module) => {
      console.log('shakenUtilitiesPath', module);
      utilities = module.utilities;
    });
  } else {
    console.log(123, 'is development');
    await import('./utilities').then((module) => {
      console.log('utilitiesPath', module);
      utilities = module.utilities;
    });
  }
  return utilities;
}
//
export const utilities = getUtilities();
// Define the type for UtilitiesType
export type UtilitiesType = typeof utilities;
