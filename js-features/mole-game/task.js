const deads = document.getElementById("dead")

let playing = true,
    activeHole = 1;
    
const stop = () => playing = true,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index => getHole( index ).className = 'hole',
    activateHole = index => getHole( index ).className = 'hole hole_has-mole'
    
   

    console.log(getHole(index))
getHole = index => {
    document.getElementById(`hole${index}`)
    console.log(getHole(index))
}



