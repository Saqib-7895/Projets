let insert = document.querySelector('#insert');

window.addEventListener('keydown',(a)=>{
    insert.innerHTML = `
    <div class = "color">
    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${(a.key === ' ' ? 'Space'  : a.key)}</td>
    <td>${a.keyCode}</td>
    <td>${a.code}</td>
  </tr>
  </table>
    </div>
    `
})