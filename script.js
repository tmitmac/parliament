// Shared JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize any shared components
    console.log('Square Parliament website loaded');
    
    // Example: Add active class to current page in nav
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('custom-navbar a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

// Function to fetch live session data (example)
async function getCurrentSession() {
    try {
        const response = await fetch('https://api.example.com/live-session');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching session data:', error);
        return null;
    }
}