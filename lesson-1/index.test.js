const lessonOne = require('./index');

/* Что протестировать */

// Тесты из условия (если есть)
// - предварительно просчитать на листочке, составить алгоритм

// Общие случаи
// - обычные кейсы

// Особые случаи
// - пограничные случаи - начало последовательности
// - пограничные случаи - конец последовательности
// - все элементы одинаковые
// - всего 1 элемент
// - пустая строка
// - отрицательные значения, все отрицательные (тут неуместно)

// Тесты должны заходить во все ветки условий и циклов
// Один тест - одна ошибка 

describe('test lesson 1', () => {
  it('test \'abcsefgahasdasaasdadadadadsdeagfahsgjwebgudsbnvjaksjsssdsdssddsaaaaaf\' is ok', () => {
    expect(lessonOne.solutionThree('abcsefgahasdasaasdadadadadsdeagfahsgjwebgudsbnvjaksjsssdsdssddsaaaaaf')).toBe('a 18');
  })
  it('test left border is ok', () => {
    expect(lessonOne.solutionThree('aaaaaf')).toBe('a 5');
  })
  it('test right border is ok', () => {
    expect(lessonOne.solutionThree('faaaaa')).toBe('a 5');
  })
  it('test the same elements is ok', () => {
    expect(lessonOne.solutionThree('aaaaaa')).toBe('a 6');
  })
  it('one element is ok', () => {
    expect(lessonOne.solutionThree('a')).toBe('a 1');
  })
  it('test empty string is ok', () => {
    expect(lessonOne.solutionThree('')).toBe('empty 0');
  })
});
