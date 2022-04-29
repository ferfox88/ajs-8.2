import ErrorRepository from '../ErrorRepository';

test('корректный метод translate', () => {
  const error = new ErrorRepository();
  error.errorMap.set(1, 'Ошибка номер 1');
  error.errorMap.set(2, 'Ошибка номер 2');
  const result = 'Ошибка номер 2';
  expect(error.translate(2)).toEqual(result);
});

test('некорректный метод translate', () => {
  const error = new ErrorRepository();
  error.errorMap.set(1, 'Ошибка номер 1');
  error.errorMap.set(2, 'Ошибка номер 2');
  const result = 'Unknown error';
  expect(error.translate(3)).toEqual(result);
});
