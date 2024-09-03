document.addEventListener('DOMContentLoaded', (event) => {
    const coinButton = document.getElementById('coinButton');
    const balanceElement = document.getElementById('balance');
    let balance = 0;

    coinButton.addEventListener('click', () => {
        balance += 1;
        balanceElement.textContent = balance;
    });
});
