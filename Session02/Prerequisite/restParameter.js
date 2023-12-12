// rest operator aka rest parameter use for adding parameters to function and must use to last parameter :

const myfunc = (name,lastname,...data) => {
    console.log(name)
    console.log(lastname)
    console.log(data)
}
myfunc("mohammad","mohammadi",27,true,"Tehran")

//output will show like this :
// mohammad
//kalate
// [27,true,Tehran]
//Now i have to expand this array(which convert to array by rest parameter) 
const expandedfunc = (name,lastname,...data) => {
    console.log(name)
    console.log(lastname)
    console.log(...data)
}
expandedfunc("mohammad","mohammadi",27,true,"Tehran")
//output :
//mohammad
//kalate
//27 true Tehran
