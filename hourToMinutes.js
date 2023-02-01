function getHourConvertedToMinute(hour){
    const minutes = hour * 60;
    return  minutes ;
}
const hour = 24;
const hourToMinutes =  getHourConvertedToMinute(hour);
console.log('Give an hour and take a minutes :', hourToMinutes);