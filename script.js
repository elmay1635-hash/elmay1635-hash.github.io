document.addEventListener('DOMContentLoaded', () => {
    // 3D Tilt Effect for cards
    const container = document.querySelector('.container');
    const infoCards = document.querySelectorAll('.info-card');

    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            const x = (window.innerWidth / 2 - e.pageX) / 25;
            const y = (window.innerHeight / 2 - e.pageY) / 25;
            
            container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        }
    });

    // Hover effect for info cards
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animate numbers on load calculation
    // Example: Calculate age dynamically
    const birthDateStr = document.getElementById('dob-display').innerText; // e.g. "2003-05-15"
    // Assuming format YYYY-MM-DD or similar standard, adjust if needed
    // For this example we just parse standard date string
    const birthDate = new Date(birthDateStr);
    const today = new Date();
    
    if (!isNaN(birthDate)) {
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        document.getElementById('age-display').innerText = `${age} Tahun`;
    }
});
