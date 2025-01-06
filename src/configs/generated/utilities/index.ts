/**
* AUTO GENERATED
* <---DO NOT MODIFY THIS FILE--->
*/

export * from './types';

    // Use dynamic import instead of require
    // Define the function to get utilities

    export async function getUtilities() {
      const utilsFile =
        process.env.NODE_ENV === 'production'
          ? await import('./shakenUtilities')
          : await import('./utilities');
      return utilsFile.default;
    }
    // Define the type for UtilitiesType
    export type UtilitiesType = Awaited<ReturnType<typeof getUtilities>>;
    