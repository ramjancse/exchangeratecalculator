// const currencyEl_one = document.getElementById('currentcy-one');
// const amountEl_one = document.getElementById('amount-one');

// const currencyEl_two = document.getElementById('currentcy-two');
// const amountEl_two = document.getElementById('amount-two');
// const rateEl = document.getElementById('rate');
// const swap = document.getElementById('swap');

// //fetch rates and update dom
// function calculate(){
//     const currency_one = currencyEl_one.value;
//     const currency_two = currencyEl_two.value;
//     console.log(currency_one);
//    fetch(`https://api.exchangeratesapi.io/latest?symbols=${currency_one},${currency_two}`)
//    .then(res => res.json())
//    .then(data => {
//     const rate = data.rates[currency_two];
//     rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

//     amountEl_two.value = ( amountEl_one.value * rate).toFixed(2);  
//     console.log(rate)

//    });
  
  
// }
// currencyEl_one.addEventListener('change', calculate);
// amountEl_one.addEventListener('input', calculate);
// currencyEl_two.addEventListener('change', calculate);
// amountEl_two.addEventListener('input', calculate);
// // swap.addEventListener('click', () => {
// //     const temp = currencyEl_one.value;
// //     currencyEl_one.value = currencyEl_two.value;
// //     currencyEl_one.value = temp;
// //     calculate();
// // });

// calculate();

const currencyEL_one = document.getElementById('currency-one');
const amountEL_one = document.getElementById('amount-one');
const currencyEL_two = document.getElementById('currency-two');
const amountEL_tow = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');

console.log(rateEl);


function calculate(){
    const currency_one = currencyEL_one.value;
    const currency_two = currencyEL_two.value;
    
    fetch(`https://api.exchangeratesapi.io/latest?symbols=${currency_one},${currency_two}`)
    .then(res => res.json())
    .then(data => {
        
        const rate = data.rates[currency_two];
        
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two} `

        amountEL_tow.value = (amountEL_one.value * rate).toFixed(2);
    })
    
    console.log(currency_one, currency_two);
}
currencyEL_one.addEventListener('change', calculate);
amountEL_one.addEventListener('input', calculate);
currencyEL_two.addEventListener('change', calculate);
amountEL_tow.addEventListener('input', calculate);

calculate();