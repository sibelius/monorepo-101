import { fnA } from '@test/packageA';

export const fnB = () => {
  const value = fnA();
  console.log('packageB');

  return value * 2;
};
