const menuBtn = document.getElementById('menu-btn');
        const menu = document.getElementById('menu');
        
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
        
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const arrow = question.querySelector('svg');
            
            question.addEventListener('click', () => {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                        otherItem.querySelector('svg').classList.remove('rotate-180');
                    }
                });
                
                item.classList.toggle('active');
                
                if (item.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    arrow.classList.add('rotate-180');
                } else {
                    answer.style.maxHeight = '0';
                    arrow.classList.remove('rotate-180');
                }
            });
        });
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    if (!menu.classList.contains('hidden')) {
                        menu.classList.add('hidden');
                    }
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
