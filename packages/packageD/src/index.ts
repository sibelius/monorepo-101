import { fnB } from '@test/packageB';
import { fnC } from '@test/packageC';

export const fnD = () => {
  const b = fnB();
  const c = fnC();
  console.log('packageD');

  return b + c;
};
