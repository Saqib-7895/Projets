let random = function(){
    let hex  ="0123456789ABCDEF";
    let col = '#';
    for(let i=0; i<6; i++){
        col += hex[Math.floor(Math.random()*16)]
    }

    return col;
}
 let mango;
  let  startcol = function(){
    mango =   setInterval(chang, 500);
      function chang() {
         document.body.style.backgroundColor = random();
      }
    }

  let  stopcol = function(){
        clearInterval(mango);
        document.body.style.backgroundColor = '#212121'
        mango =null;
  }

document.querySelector('#start').addEventListener('click',startcol)
document.querySelector('#stop').addEventListener('click',stopcol)