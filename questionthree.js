//Not important on the main code, as the getActualSleepHours has changed.
const getSleepHours = day => {
 switch(day){
  case 'monday' :
   return 8;
   break;
   case "tuesday" :
    return 7
    break;
    case 'wenesday' :
     return 6;
     break;
     case "thursday":
     return 5
     break;
     case 'friday':
      return 4;
      break;
    case 'saturday':
      return 3;
      break;
    case 'sunday':
      return 2;
      break;
      default:
       return "Choose correct day."
 }
 
}
 const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
 const getIdealSleepHours = idealHours =>
   idealHours * 7;
 //function to calculate the sleep debt, the actual sleep hours are already set up at 56. you need to input your ideal sleep hours so it can be calculated. remeber the input for ideal hrs will be multiply by 7 days.
 const calculateSleepDebt = () =>{
 const actualSleepHours = getActualSleepHours(); /*56 hrs8*/
   //Input ideal hrs.
 const idealSleepHours =
 getIdealSleepHours(8);
   // if/else statement to output calculations with - + hours included in the statement.
   if (actualSleepHours === idealSleepHours){
    console.log('You have the perfect amount of sleep!');
   } else if (idealSleepHours > actualSleepHours) {
    console.log('You got ' + 
   (idealSleepHours - actualSleepHours) + ' hour(s) more sleep, You have more sleep than needed!');
   } else { console.log('you got ' + 
   (idealSleepHours - actualSleepHours ) + 'hour(s) less sleep, You should get some rest!');} 
  };
 calculateSleepDebt();