// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (a) {
//     // console.log(a);
//     // console.log(a.target);
//     if (a.target.id === 'grey') {
//       body.style.backgroundColor = 'grey';
//     } else if (a.target.id === 'white') {
//       body.style.backgroundColor = 'white';
//     } else if (a.target.id === 'blue') {
//       body.style.backgroundColor = 'blue';
//     } else if (a.target.id === 'yellow') {
//       body.style.backgroundColor = 'yellow';
//     } else if (a.target.id === 'red') {
//       body.style.backgroundColor = 'red';
//     }
//   });
// });
//--------------------------------------------------------------------//
// let form = document.querySelector('form');

// form.addEventListener('submit', function (a) {
//   a.preventDefault();
//   let value = parseInt(document.querySelector('#height').value);
//   let value1 = parseInt(document.querySelector('#weight').value);
//   let result = document.querySelector('#results');

//   if (value === '' || value < 0 || isNaN(value)) {
//     result.innerHTML = `Please Enter valid height : ${value}`;
//   } else if (value1 === '' || value1 < 0 || isNaN(value1)) {
//     result.innerHTML = `Please Enter valid weight :${value1}`;
//   } else {
//     let ans = (value1 / ((value * value) / 10000)).toFixed(2);
//     result.innerHTML = `<span> The answer is  ${ans}</span>`;
//   }
// });
//----------------------------------------------------------

// let name = document.querySelector('form')
// let name1 = document.querySelector('body')

// name1.addEventListener('submit', function (a){
// a.preventDefault();

// let value1 = parseInt(document.querySelector('#height').value);
// let value2 = parseInt(document.querySelector('#weight').value);
// let result = document.querySelector('#results');

// if(value1 == '' || value1 <= 0 || isNaN(value1)){
//   result.innerHTML = `Please enter valid height ${value1}`
// }
//  else if(value2 == '' || value2 <= 0 || isNaN(value2)){
//   result.innerHTML = `Please enter valid weight ${value2}`
// }else{
//   let ans =   (value2/((value1*value1)/1000)).toFixed(1);
//   result.innerHTML = `<span>The answe is ${ans}</span>`
// }
// } );
//-----------------------------------------------------------------//
// let form = document.querySelector('body')
// let button = document.querySelectorAll('.buttons')

// orm.addEventListener('click', function(a){
//   if(a.target.id == 'grey'){
//     form.style.backgroundColor = 'grey';
//   }
//   else if(a.target.id == 'white'){
//     form.style.backgroundColor = 'white';
//   }
//   else if(a.target.id == 'red'){
//     form.style.backgroundColor = 'red';
//   }
//   else if(a.target.id == 'yellow'){
//     form.style.backgroundColor = 'yellow';
//   }
//   else if(a.target.id == 'blue'){
//     form.style.backgroundColor = 'blue';
//   }
// })
// ----------------------------------
// let clock = document.querySelector('#clock');

// setInterval(function () {
//   let date = new Date();
//   // clock.innerHTML = date.toLocaleTimeString();
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);
// ----------------------------------------------//

// let name = document.querySelector('#time')

// setInterval(function(){
//     let date = new Date();
//     name.innerHTML = date.toLocaleTimeString();
// },1000);


let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body')
buttons.forEach(function(button) {
    button.addEventListener('click', function(a){
        if(a.target.id === 'grey'){
            body.style.backgroundColor = 'grey';
        }else if(a.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }else if(a.target.id === 'white'){
            body.style.backgroundColor = 'white';
        }else if(a.target.id === 'red'){
            body.style.backgroundColor = 'red';
        }else if(a.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
        }else if(a.target.id === 'black'){
            body.style.backgroundColor = 'black';
        }else if(a.target.id === 'ruby'){
            body.style.backgroundColor = 'rebeccapurple';
        }else if(a.target.id === 'pink'){
            body.style.backgroundColor = 'pink';
        }
        else if(a.target.id === 'green'){
            body.style.backgroundColor = 'green';
        }
    });
});
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (a) {
//     // console.log(a);
//     // console.log(a.target);
//     if (a.target.id === 'grey') {
//       body.style.backgroundColor = 'grey';
//     } else if (a.target.id === 'white') {
//       body.style.backgroundColor = 'white';
//     } else if (a.target.id === 'blue') {
//       body.style.backgroundColor = 'blue';
//     } else if (a.target.id === 'yellow') {
//       body.style.backgroundColor = 'yellow';
//     } else if (a.target.id === 'red') {
//       body.style.backgroundColor = 'red';
//     }
//   });
// });