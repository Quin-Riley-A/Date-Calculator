import Date from './../src/date.js'

describe('Date', () => {
  test('should construct a date object from given formatted (yyyy-mm-dd) date', () => {
    const date = new Date('2022-10-01');
    expect(date.year).toEqual("2022");
    expect(date.month).toEqual("10");
    expect(date.day).toEqual("01");
  });

  test('should convert date to Zeller Algorithm appropriate format', () => {
    const date = new Date('2022-10-01');
    const date2 = new Date('2022-01-01');
    const date3 = new Date('2022-02-01');
    date.zellerConvert();
    date2.zellerConvert();
    date3.zellerConvert();
    expect(date.zellerDate).toEqual('2022-10-01');
    expect(date2.zellerDate).toEqual('2021-13-01');
    expect(date3.zellerDate).toEqual('2021-14-01');
  });

  test("should convert zellerDate into number representing weekday using Zeller's Algorithm", () => {
    const date = new Date('2022-10-01');
    date.zellerConvert();
    date.zellerCalc();
    expect(date.dayValue).toEqual(0);
  });
});