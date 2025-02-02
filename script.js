document.getElementById('preOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        fetch('https://formspree.io/f/xyzkwrdd', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Email submitted:", email);
            document.getElementById('message').classList.remove('hidden');
            document.getElementById('email').value = '';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your email. Please try again.');
        });
    }
    
        document.addEventListener("scroll", function () {
            const form = document.getElementById("floatingForm");
            const scrollY = window.scrollY;
            const newY = 50 + Math.sin(scrollY * 0.02) * 10; // Adjust float range
            form.style.transform = `translate(-50%, ${newY}%)`;
        });
    
});
