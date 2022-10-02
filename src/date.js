export default class Date{
  constructor(dateStr){
    const dateArr = dateStr.split('-');
    this.year = dateArr[0];
    this.month = dateArr[1];
    this.day = dateArr[2];
  };

  dateZeller(){
    let intYear = parseInt(this.year);
    if (this.month === "01") {
      this.zellerDate = (intYear - 1) + "-" + "13" + "-" + this.day;
    } else if (this.month === "02") {
      this.zellerDate = (intYear - 1) + "-" + "14" + "-" + this.day;
    }else {
      this.zellerDate = this.year + "-" + this.month + "-" + this.day;
    };
  };
}