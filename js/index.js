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

// 6. Add particle.js on 'load'
window.addEventListener('load', () => {
    particlesJS("particles-js", 
    {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},
    "color":{"value":"#17A2B8"},
    "shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},
    "polygon":{"nb_sides":5},
    "image":{"src":"img/github.svg","width":100,"height":100}},
    "opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
    "size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
    "line_linked":{"enable":true,"distance":150,"color":"#17A2B8","opacity":0.4,"width":1},
    "move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,
    "attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},
    "onclick":{"enable":true,"mode":"push"},"resize":true},
    "modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
    "bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},
    "repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},
    "remove":{"particles_nb":2}}},"retina_detect":true});
})

// 7. Make desitnation h4 change colors on 'resize'
const desitnationTitles = document.querySelectorAll('.destination h4');
desitnationTitles.forEach(element => {
    window.addEventListener('resize', () => {
        element.style.color = '#17A2B8';
    })
})

