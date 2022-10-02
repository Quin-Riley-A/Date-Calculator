export default class Date{
  constructor(dateStr){
    const dateArr = dateStr.split('-');
    this.year = dateArr[0];
    this.month = dateArr[1];
    this.day = dateArr[2];
  }

  zellerConvert(){
    let intYear = parseInt(this.year);
    if (this.month === "01") {
      this.zellerDate = (intYear - 1) + "-" + "13" + "-" + this.day;
    } else if (this.month === "02") {
      this.zellerDate = (intYear - 1) + "-" + "14" + "-" + this.day;
    }else {
      this.zellerDate = this.year + "-" + this.month + "-" + this.day;
    }
  }
  
  zellerCalc(){
    const zellerDateArr = this.zellerDate.split('-');
    const zellerYear = parseInt((zellerDateArr[0]).slice(-2));
    const zellerDay = parseInt(zellerDateArr[2]);
    const zellerMonth = parseInt(zellerDateArr[1]);
    const zellerCentury = Math.floor(parseInt(zellerDateArr[0])/100);
    this.dayValue = (Math.floor(13*(zellerMonth + 1)/5) + Math.floor(zellerYear/4) + Math.floor(zellerCentury/4) + zellerDay + zellerYear - 2*zellerCentury) % 7;
  }
}