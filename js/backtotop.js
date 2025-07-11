// Back to top button functionality
document.addEventListener('scroll', () => {
    const topBtn = document.getElementById('topBtn');
    if (topBtn) {
        topBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const topBtn = document.getElementById('topBtn');
    if (topBtn) {
        topBtn.onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
    }
}); 