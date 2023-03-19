// code your solution here

//const saturdayFun = function (activity='roller-skate'){
//return ('This Saturday, I want ${activity}!');
//}
//saturdayFun();
//saturdayFun('bathe my dog!');

//const mondayWork = function(activity="go to the office"){
  //return ('This Monday, I will ${activity}.')
//}
//mondayWork();
//mondayWork('work from home');



const saturdayFun = function (activity = 'roller-Skate'){
return ("This Saturday, I want to ${activity}!");
}
saturdayFun();
saturdayFun('bathe my dog!');

const mondayWork = function(activity = 'go to the office'){
  return ("This Monday, I will ${activity}.")
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(visualFlair = "*") {
  return function(adjective = "special") {
    return 'You are ${visualFlair }${adjective}${visualFlair }!';
  }
}
wrapAdjective();