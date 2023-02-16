console.error = ()=>{}
const fullpageEl = document.getElementById('fullpage')
const menuBtn = document.querySelector('.menu__btn')
const navigation = document.querySelector('.navigation')
const navCloseBtn = document.querySelector('.navigation__close__btn')

const blurOverlay = document.querySelector('.blur__overlay')

const IS_ACTIVE = 'is--active'

const toggleNavigation = () => {
	navigation.classList.toggle(IS_ACTIVE)
	blurOverlay.classList.toggle(IS_ACTIVE)
	fullpageEl.classList.toggle('no-scroll')
}

const CLICK = 'click'

menuBtn.addEventListener(CLICK, toggleNavigation)
navCloseBtn.addEventListener(CLICK, toggleNavigation)
blurOverlay.addEventListener(CLICK, toggleNavigation)

new fullpage('#fullpage', {
	autoScrolling: true,
	scrollBar: true,
})

// document.addEventListener("DOMContentLoaded", function() {
// 	var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));
  
// 	if ("IntersectionObserver" in window) {
// 	  let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
// 		entries.forEach(function(entry) {
// 		  if (entry.isIntersecting) {
// 			entry.target.classList.add("visible");
// 			lazyBackgroundObserver.unobserve(entry.target);
// 		  }
// 		});
// 	  });
  
// 	  lazyBackgrounds.forEach(function(lazyBackground) {
// 		lazyBackgroundObserver.observe(lazyBackground);
// 	  });
// 	}
//   });
