//This function will take principal,rate and year values and calculates the interest and show it on the screen
function compute()
{
    //principal variable is created which takes the initial or principal amount
    var principal = document.getElementById("principal").value;

    //we check if the principal amount is appropriate or not
    if(principal<=0){
        alert("Please enter amount greater then zero");
        principal.focus();
        return false;
    }

    //rate variable takes the interest rate value
    var rate = document.getElementById("rate").value;

    //years variable takes the value of no. of years
    var years = document.getElementById("years").value;

    //formula for calculating simple interest.we store the result in the variable interest
    var interest = principal*rate*years/100;

    //we take the current year and add it with the years variable.hence year variable shows the year in which we will get amount back
    var year = new Date().getFullYear()+parseInt(years);

   //we show the result
    document.getElementById("result").innerHTML="\<br\>\<br\>If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an interest of "+interest+",\<br\>in the year "+year+"\<br\>"

}

//This function helps to change the range slider values dynamically
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
           
