import * as R from 'ramda';

export const getDependecyVersion:(pckg: object) => (module: string) => (dependencyType: string) => string =
  (pckg:object) => (module:string) => (dependencyType:string) =>
  R.view(
    R.lensPath([dependencyType, module]),
    pckg
  );
