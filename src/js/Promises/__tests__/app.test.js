/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default-member
import GameSavingLoader from '../GameSavingLoader';

test('should return promise for load()', async () => {
  const result = await GameSavingLoader.load();

  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  expect(result).toEqual(expected);
});
