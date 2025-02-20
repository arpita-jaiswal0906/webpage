const form = document.getElementById('login-form');
        const codeInput = document.getElementById('code');
        const submitBtn = document.getElementById('submit-btn');
        const resultDiv = document.getElementById('result');

        const secretCode = 'Gadhuu'; // Replace with your secret code
        const nextPageUrl = 'main.html'; // Replace with the URL of the new page

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const userInput = codeInput.value.trim();
            if (userInput === secretCode) {
                resultDiv.innerHTML = 'Baby';
                window.location.href = nextPageUrl; // Redirect to new page
            } else {
                resultDiv.innerHTML = 'Naa❌ Tum Meri Baby Nhi Hoo😏... Kon Hooo Tum🤨 Kaha Hai Meri Cuteeii....🥹';
            }
             // Apply CSS to make the message appear at the bottom center
        resultDiv.style.position = 'fixed';
        resultDiv.style.bottom = '75px'; // Adjust this for exact position
        resultDiv.style.left = '50%';
        resultDiv.style.transform = 'translateX(-50%)';
        // resultDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Dark background for visibility
        resultDiv.style.color = 'black';
        resultDiv.style.padding = '10px 20px';
        resultDiv.style.borderRadius = '10px';
        resultDiv.style.fontSize = '18px';
        resultDiv.style.textAlign = 'center';
        resultDiv.style.maxWidth = '40%';
        });

        // Function to create falling emojis
        function createFallingEmoji() {
            const emojis = ['❤️', '💖', '💘', '🥰', '💕', '💞', '🐭', '💓', '💗', '😍','😘', '😎'];
            const emoji = document.createElement('div');
            emoji.classList.add('falling-emoji');
            emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
            emoji.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Random speed for fall
            document.body.appendChild(emoji);
            setTimeout(() => emoji.remove(), 5000); // Remove emoji after it falls
        }

        // Generate falling emojis every 500ms
        setInterval(createFallingEmoji, 500);