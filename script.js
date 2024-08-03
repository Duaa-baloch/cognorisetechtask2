let countdownInterval;

function startCountdown() {
    const targetDate = new Date(document.getElementById('datetime').value);
    if (isNaN(targetDate.getTime())) {
        alert('Please select a valid date and time.');
        return;
    }

    clearInterval(countdownInterval);

    const now = new Date().getTime();
    const totalDuration = targetDate - now;

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerText = 'Countdown ended';
            document.querySelector('.progress').style.width = '100%';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerText = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
        document.getElementById('countdown').className = 'countdown-visible';

        const elapsed = totalDuration - distance;
        const progress = (elapsed / totalDuration) * 100;
        document.querySelector('.progress').style.width = `${progress}%`;
    }, 1000);
}
