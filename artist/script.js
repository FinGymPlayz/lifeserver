setTimeout(() => {
    typeIP("4.205.36.247")
}, 1000);

function typeIP(ip) {
    const ipElement = document.getElementById('ip');
    let i = 0;
    const interval = setInterval(() => {
        if (i < ip.length) {
            ipElement.innerText += ip.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 50); // Adjust the typing speed by changing the interval. 100 ms here.
}
