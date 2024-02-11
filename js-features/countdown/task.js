const targetDate = document.getElementById('timer')
 
function updateCountdown() {
    const remainingTime = document.getElementById('timer').innerText = --targetDate.textContent;
    if (remainingTime === 0) {
        clearTimeout(a)
        alert("Вы победили в конкурсе!")
    }
    
}
const a = setInterval(updateCountdown, 1000);

