document.addEventListener('DOMContentLoaded', () => {
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    function updateCountdown() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        let ramadan = new Date(`Feb 19, ${currentYear} 00:00:00`).getTime();

        // If Ramadan already passed, use next year
        if (ramadan - currentDate.getTime() < 0) {
            ramadan = new Date(`Feb 19, ${currentYear + 1} 00:00:00`).getTime();
        }

        const diff = ramadan - currentDate.getTime();

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        days.innerHTML = d;
        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
    }

    // Update countdown immediately
    updateCountdown();

    // Update countdown every second
    setInterval(updateCountdown, 1000);
});




