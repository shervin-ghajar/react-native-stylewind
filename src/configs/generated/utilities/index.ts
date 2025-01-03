/**
 * AUTO GENERATED
 * <---DO NOT MODIFY THIS FILE--->
 */

export * from './types';

// Use dynamic import instead of require
// Define the function to get utilities
const utilitiesConfig = {
  production: () => import('./shakenUtilities'),
  development: () => import('./utilities'),
};

export async function getUtilities() {
  const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';
  const utilsFile = await utilitiesConfig[environment]();
  return utilsFile.utilities;
}
// Define the type for UtilitiesType
export type UtilitiesType = Awaited<ReturnType<typeof getUtilities>>;
