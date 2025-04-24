// script.js

// Show welcome message on first visit using sessionStorage
window.addEventListener('load', () => {
    if (!sessionStorage.getItem('visited')) {
        alert('Welcome to Naveen.N\'s Portfolio!');
        sessionStorage.setItem('visited', 'true');
    }

    // Add greeting based on time of day
    const aboutSection = document.querySelector('section:nth-of-type(1) p');
    const greeting = getGreeting();
    aboutSection.innerHTML = `${greeting} ${aboutSection.innerHTML}`;
});

// Get time-based greeting
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "🌞 Good Morning!";
    else if (hour < 18) return "🌤️ Good Afternoon!";
    else return "🌙 Good Evening!";
}

// Scroll event to change header background
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'linear-gradient(135deg, #007bff, #0056b3)';
    } else {
        header.style.background = 'linear-gradient(135deg, #1a1a1a, #333)';
    }
});
