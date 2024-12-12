var script = document.createElement('script');
script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';

script.onload = function() {
  var typed = new Typed(".auto-type", {
    strings: ["Energía Renovable", "100% Limpia", "La Energía del Futuro"],
    cursorChar: '|',
    startDelay: 500,
    typeSpeed: 50,
    backSpeed: 30,
    smartBackspace: true,
    loop: true
  });  
};
document.head.appendChild(script);