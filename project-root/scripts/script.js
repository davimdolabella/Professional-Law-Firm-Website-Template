document.getElementById('menu-icon').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('menu-links').classList.toggle('active');
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const toggle = item.querySelector('.faq-toggle');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-toggle').textContent = '+';
                otherItem.querySelector('.faq-answer').style.maxHeight = '0px';
            }
        });
        
        item.classList.toggle('active');
        
        if (item.classList.contains('active')) {
            toggle.textContent = '-';
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            toggle.textContent = '+';
            answer.style.maxHeight = '0px';
        }
    });
});