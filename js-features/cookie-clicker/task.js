const cookieStart = document.getElementById('cookie')

cookieStart.onclick = () => {
    
    if (cookieStart.width === 200) {
        document.getElementById('clicker__counter').textContent++
        cookieStart.width = 250
    }
    else {
        document.getElementById('clicker__counter').textContent++
        cookieStart.width = 200
    }
}
