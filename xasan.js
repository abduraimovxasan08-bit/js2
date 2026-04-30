
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('emailField').value;

    // Имитация отправки
    const btn = this.querySelector('.btn');
    btn.textContent = 'Отправка...';
    btn.disabled = true;

    setTimeout(() => {
        alert('Успешно! ' + email + ' добавлен в базу. Спасибо!');
        btn.textContent = 'Get Started';
        btn.disabled = false;
        document.getElementById('emailField').value = '';
    }, 1500);
});

// 2. Плавная анимация при скролле
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 1s ease-out';
    observer.observe(section);
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}





