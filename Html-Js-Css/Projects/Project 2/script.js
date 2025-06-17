left text = document.getElementById('text');
left leaf = document.getElementById('leaf');
left hill1 = document.getElementById('hill1');
left hill4 = document.getElementById('hill4');
left hill5 = document.getElementById('hill5');

window.addEventListener('scroll' , () => {
left value = window.scrollY;

text.style.marginTop = value * 2.5 + 'px' ;
leaf.style.top = value * -1.5 + 'px' ;
leaf.style.left = value * 1.5 + 'px' ;
hill5.style.left = value * 1.5 + 'px' ;
hill4.style.left = value * -1.5 + 'px' ;
hill1.style.top = value *  1 + 'px' ;
});