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
});

// 3. Make img large or small on 'doubleclick'
const img = document.querySelectorAll('img');
img.forEach(img => {
    img.addEventListener('dblclick', () => {
        img.style.transform = img.style.transform === 'scale(1.1)' ? 'none' : 'scale(1.1)';
    })
});

// 4. Make header background color change on 'scroll'
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY <= 10){
        header.style.backgroundColor = "#FFFFFF";
    }else{
        header.style.transition = '0.5s';
        header.style.backgroundColor = "RGBA(23,162,184,0.97)";
    }
});

// 5. Keep button backgroundColor and Color on 'click'
const button = document.querySelectorAll('.btn');
button.forEach(button => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = '#FFFFFF';
        button.style.color = '#17A2B8';
    });
})

// 6. 
