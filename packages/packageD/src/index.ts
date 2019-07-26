import { fnB } from '@test/packageB';
import { fnC } from '@test/packageC';

export const fn = () => {
  fnB();
  fnC();
  console.log('packageD');
};
