let array1 = [10,20,30]
let array2 = [array1,100,200]
console.log(array2)

//its kinda problem so we should expand array1 into array 2 with something called : Spread Operator

let array3 = [...array1,100,200]
console.log(array3)

//next example : adding a product in card twice and more


//using second object and assign a new value to count (overriding count)
let laptop  = {name:"asus",price:1000,count :1}
let laptop2 = {...laptop,count:laptop.count+1}
console.log(laptop2)

//without using a second object
laptop.count = laptop.count + 1;
console.log(laptop)

// Setter method
//sometimes we need to access to an object Undirectly, so we should use a function called stter method to change values 
const function2 = (newprice) => {
    if(newprice < 5000){
        laptop.price = newprice
    }
    else {
        console.log("price bigger than 5000")
    }
}
function2(5500)
console.log(laptop)

