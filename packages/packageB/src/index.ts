import { fnA } from '@test/packageA';

export const fnB = () => {
  fnA();
  console.log('packageB rebuild');
};
