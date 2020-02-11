// Your code goes here

// 1. Make nav links grow on 'mouseenter'
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(a => {
    a.addEventListener('mouseenter', () => {
        a.style.transform = 'scale(1.1)';
    });
});

// 2. Make nav links shrink on 'mouseleave'
navLinks.forEach(a => {
    a.addEventListener('mouseleave', () => {
        a.style.transform = 'scale(1)';
    })
})

// 3. Make img large or small on 'doubleclick'
const img = document.querySelectorAll('img');
img.forEach(img => {
    img.addEventListener('dblclick', () => {
        img.style.transform = img.style.transform === 'scale(1.1)' ? 'none' : 'scale(1.1)';
    })
})

// 4. Make background change on 'scroll'
const body = document.querySelector('body');
