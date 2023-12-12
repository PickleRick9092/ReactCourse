/* 
Arrow Function Structure : 
 (parameter1,parameter2,...) => {
      commands
      commands
      return ...
  }
  ---------------------------
  tips :
  1.  (a,b) => a+b  in case we have just one line of command or statement
  2.  () => a+b     in case we dont have any parameters
  3.  a => a * 2    in case we have one parameter 
*/

//calling a function : to call a function we should assign it to variable first
const function1 = (a,b,c)=>{
    console.log(a,b,c)
    } 
    function1(10,20,30)

const function2 = (a=40,b,c)=>{
    console.log(a,b,c)
}
function2(undefined,50,60)

