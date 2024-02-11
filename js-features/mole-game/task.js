const deads = document.getElementById("dead");
const lost = document.getElementById("lost");
getHole = index => document.getElementById(`hole${index}`)

for (let i = 1; i < 10; i++) {  
    getHole(i).onclick = () => {
        getHole(i).className.includes('hole_has-mole') ? ++deads.textContent : ++lost.textContent; 
        console.log(deads.textContent)
        if (deads.textContent == 10) {
            alert('Вы победили!')
            deads.textContent = 0
            lost.textContent = 0
        }
        else if (lost.textContent == 5) {
            alert('Вы проиграли!')
            deads.textContent = 0
            lost.textContent = 0
        }
    } 
}
 