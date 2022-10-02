export default class Date{
  constructor(dateStr){
    const dateArr = dateStr.split('-');
    this.year = dateArr[0];
    this.month = dateArr[1];
    this.day = dateArr[2];
  }

  insertMethodName(){

  }
}