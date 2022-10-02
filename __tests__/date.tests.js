import Date from './../src/date.js'

describe('Date', () => {
  test('should construct a date object from given formatted (yyyy-mm-dd) date', () => {
    const date = new Date('2022-10-01');
    expect(date.year).toEqual("2022");
    expect(date.month).toEqual("10");
    expect(date.day).toEqual("01");
  });
});