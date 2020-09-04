
document.querySelector('#green').onclick = function() {
    document.querySelector('body').style.backgroundColor = '#519f67';
    document.querySelector('.navbar').style.backgroundColor = '#68c181';
    document.querySelector('.nav-masthead').style.backgroundColor = '#68c181';
    document.querySelector('.a').style.background = '#0e4d02';
    document.querySelector('.b').style.background = '#07551b';
    document.querySelector('.c').style.background = '#055c1c';
    document.querySelector('.d').style.background = '#0b6420';
    document.querySelector('.e').style.background = '#106626';
    document.querySelector('.f').style.background = '#126b2b';
    document.querySelector('.g').style.background = '#166e33';
    document.querySelector('.h').style.background = '#197038';
    document.querySelector('.i').style.background = '#1d773b';
    document.querySelector('.j').style.background = '#207737';
    document.querySelector('.k').style.background = '#247c3f';
    document.querySelector('.l').style.background = '#28813f';
    document.querySelector('.m').style.background = '#2b8344';
    document.querySelector('.n').style.background = '#2f864c';
    document.querySelector('.o').style.background = '#338a50';
    document.querySelector('.p').style.background = '#348b4f';
    document.querySelector('.q').style.background = '#398f51';
    document.querySelector('.r').style.background = '#3d8f52';
    document.querySelector('.s').style.background = '#45945d';
    document.querySelector('.t').style.background = '#48945d';
};

const backgroundAnimation = anime({
  targets: ".tile",
  translateX: [-20, 0],
  opacity: [0, 1],
  delay: function(el, i, l) {
  return i * 100
  },
  duration: 400,
  easing: "easeOutCubic",
});


 /* draws signature on top of page with paths set in the html-file. */
 var signatureDrawing = anime({
  targets: '#signature .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
});
/* click the area of the signature to reverse the effect */
document.querySelector('#signature').onclick = function() {
  signatureDrawing.reverse() /* changes the direction of the animation, but without actually playing it. so it changes the STATE */
  signatureDrawing.play()
}


document.querySelector('.image-cropper').onclick = function() {
  backgroundAnimation.reverse() /* changes the direction of the animation, but without actually playing it. so it changes the STATE */
  backgroundAnimation.play()
}



/* sphere animation from https://codepen.io/juliangarnier/pen/LMrRNW on https://freefrontend.com/anime-js-examples/ */
function fitElementToParent(el, padding) {
  var timeout = null;
  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, {scale: 1});
    var pad = padding || 0;
    var parentEl = el.parentNode;
    var elOffsetWidth = el.offsetWidth - pad;
    var parentOffsetWidth = parentEl.offsetWidth;
    var ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
  }
  resize();
  window.addEventListener('resize', resize);
}

var sphereAnimation = (function() {

  var sphereEl = document.querySelector('.sphere-animation');
  var spherePathEls = sphereEl.querySelectorAll('.sphere path');
  var pathLength = spherePathEls.length;
  var hasStarted = false;
  var aimations = [];

  fitElementToParent(sphereEl);

  var breathAnimation = anime({
    begin: function() {
      for (var i = 0; i < pathLength; i++) {
        aimations.push(anime({
          targets: spherePathEls[i],
          stroke: {value: ['rgba(255,75,75,1)', 'rgba(80,80,80,.35)'], duration: 500},
          translateX: [2, -4],
          translateY: [2, -4],
          easing: 'easeOutQuad',
          autoplay: false
        }));
      }
    },
    update: function(ins) {
      aimations.forEach(function(animation, i) {
        var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false
  });

  var introAnimation = anime.timeline({
    autoplay: false
  })
  .add({
    targets: spherePathEls,
    strokeDashoffset: {
      value: [anime.setDashoffset, 0],
      duration: 3900,
      easing: 'easeInOutCirc',
      delay: anime.stagger(190, {direction: 'reverse'})
    },
    duration: 2000,
    delay: anime.stagger(60, {direction: 'reverse'}),
    easing: 'linear'
  }, 0);

  var shadowAnimation = anime({
      targets: '#sphereGradient',
      x1: '25%',
      x2: '25%',
      y1: '0%',
      y2: '75%',
      duration: 30000,
      easing: 'easeOutQuint',
      autoplay: false,
    }, 0);

  function init() {
    introAnimation.play();
    breathAnimation.play();
    shadowAnimation.play();
  }
  
  init();

})();
/* end of sphere animation */