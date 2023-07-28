function interest(principal, rate= 3.5, years = 5){
    return((principal * rate)/100) * years; 
}
// if the user did not pass an arg then take a default value
console.log(interest(100000, 3.5, 5));
