import { fnA } from '@test/packageA';

export const anotherFn = () => {
  console.log('another one and again');
}

export const fnB = () => {
  const value = fnA();
  console.log('packageB');

  // add here to cause findRelatedTests to work
  anotherFn();

  return value * 2;
};
