const cookieStart = document.getElementById('cookie');
const clikerCounter = document.getElementById('clicker__counter');

document.addEventListener('click', function (){
    cookieStart.width = ++clikerCounter.textContent % 2 ? 250 : 200;
})
// cookieStart.onclick = () => {
    
//     if (cookieStart.width === 200) {
//         document.getElementById('clicker__counter').textContent++
//         cookieStart.width = 250
//     }
//     else {
//         document.getElementById('clicker__counter').textContent++
//         cookieStart.width = 200
//     }
// }
