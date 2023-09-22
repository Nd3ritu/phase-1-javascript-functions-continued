// code your solution here

function saturdayFun(fun = 'roller-skate'){
  return `This Saturday, I want to ${fun}!`;

}
saturdayFun();

let home = "work from home";
const mondayWork = function( work = 'go to the office'){
 
if (work) {
    console.log(`This Monday, I will ${work}`);
    return `This Monday, I will ${work}.`;
    
  } else {
    console.log(`This Monday, I will ${home}`);
    return `This Monday, I will ${home}`;
  }
}
mondayWork(home)

const wrapAdjective = function(hash = "*"){
  const or = "||";
  return function( message = "a hard worker"){ 
    let programmer = "a dedicated programmer";
      console.log(`You are ${hash}${message}${hash}!`);
      return `You are ${hash}${message}${hash}!`;
    }

  
}
wrapAdjective()



  






 
