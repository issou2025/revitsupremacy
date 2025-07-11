// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const topBtn = document.getElementById('topBtn');
    
    if (topBtn) {
        // Show button when scrolling down
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                topBtn.style.display = 'block';
            } else {
                topBtn.style.display = 'none';
            }
        });
        
        // Scroll to top when button is clicked
        topBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}); 