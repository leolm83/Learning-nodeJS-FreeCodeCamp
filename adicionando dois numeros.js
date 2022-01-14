const num1 = 0;
const num2 = 10;
const indefinida= undefined;
console.log(`null nao é um numero?${isNaN(null)}`)
console.log(`undefined nao é um numero?${isNaN(indefinida)}`)
function addValues(a,b){
    if(!isNaN(a) && !isNaN(b) && a!=null && b!=null){
        return a+b
    }else{
        console.log("Numero invalido!!!")
        return false
    }
}
const totalPrice=addValues(num1,num2);
if(totalPrice){
    
    console.log(`total price is ${totalPrice}`)
}else{
    console.log(`something went wrong!, check the values and try again`)
}