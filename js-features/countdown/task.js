const targetDate = document.getElementById('timer')
 
function updateCountdown() {
    const now = 1;
    const remainingTime = targetDate.textContent - now;
    if (remainingTime === 0) {
        clearTimeout(a)
        alert("Вы победили в конкурсе!")
    }
    document.getElementById('timer').innerText = remainingTime;
}
a = setInterval(updateCountdown, 100);

