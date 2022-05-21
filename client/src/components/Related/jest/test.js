import useToGetProducts from '../lib/hooks.js';

it('shoule return an array', () => {
  await test = useToGetProducts();
  expect(test.length).toBe(5)
})