/**
 * AUTO GENERATED
 * <---DO NOT MODIFY THIS FILE--->
 */

export * from './types';

// Use dynamic import instead of require
export async function getUtilities() {
  let utilities: any; // Use 'any' or a specific type if you know it

  if (process.env.NODE_ENV === 'production') {
    const utilsFile = await import('./shakenUtilities');
    utilities = utilsFile.utilities;
  } else {
    const utilsFile = await import('./utilities');
    console.log(123, 'is development', utilsFile);
    utilities = utilsFile.utilities;
  }
  return utilities;
}
// Export utilities based on NODE_ENV
const utilities = await getUtilities();
console.log('getUtilities', utilities);
export { utilities };
// Define the type for UtilitiesType
export type UtilitiesType = typeof utilities;
