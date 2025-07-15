const coin = document.querySelector('.coin');
const result = document.querySelector('.result');
const button = document.querySelector('button');

button.addEventListener('click', flipCoin);

function flipCoin() {
    // ✅ Disable immediately
    button.disabled = true;
    result.textContent = "‎"

    // Start the flip animation
    coin.classList.add('flip');

    let isHeads = Math.random() < 0.5;
    
    // Mid-flip: toggle image and result
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            coin.src = isHeads ? '/resources/heads.svg' : '/resources/tails.svg';
            isHeads = !isHeads; // Toggle for next iteration
        }, i * 100); // Adjust timing as needed
    }
    
    // End-flip: cleanup + re-enable
    setTimeout(() => {
        coin.classList.remove('flip');
        button.disabled = false;
    }, 1000);
    

    setTimeout(() => {
        result.textContent = isHeads ? 'Heads' : 'Tails';
    }, 1000);
}

