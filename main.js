// listen for btn
document.getElementsByClassName('input').addEventListener('btn', calculateResults);

// calc results  
function calculateResults(e){
    console.log('calculating')

    // bring in the UI Variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years-to-pay');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPaymment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // convert numbers to decimal before displaying result
    //amount.value mean value entered can be used
    // amount.value also mean the value enter is taken and can be used

    // note: this loan calculating might be confusing but this is world wide way of calculating loan
    // but it might differs from country to country e.g in my country this is not acceptable
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/ 100 / 12; //at this point we are calculating the interest
    const calculatedPayment = parseFloat(years.value) * 12;

    // lets compute monthly payment
    const x =  Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal* x * calculatedInterest) / (x-1);

    // let ensure user enters a current number 
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPaymment.value = ((monthly * calculatedPayment) - principal);
    }else{
        console.log('please check your numbers')
    }

    e.preventDefault();
}