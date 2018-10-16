import TweenMax from 'gsap';

window.addEventListener('load', () => {
    TweenMax.from('#visual-bar-0', 0.7, {opacity: 0});
    TweenMax.from('#visual-bar-1', 1.1, {opacity: 0, delay: 0.4});
    TweenMax.from('#visual-bar-2', 1, {opacity: 0, delay: 0.5});
    TweenMax.from('#visual-bar-3', 1.1, {opacity: 0, delay: 0.4});
    TweenMax.from('#visual-bar-4', 0.7, {opacity: 0, delay: 0.6});
    TweenMax.from('#visual-bar-5', 0.8, {opacity: 0, delay: 0.7});
    TweenMax.from('#visual-bar-6', 1.4, {opacity: 0, delay: 0.5});
    TweenMax.from('#visual-center', 0.9, {opacity: 0, delay: 0.5});
    TweenMax.from('#visual-cloud', 1, {opacity: 0, delay: 0.7});
    TweenMax.from('#visual-left', 0.9, {opacity: 0, delay: 0.6});
    TweenMax.from('#visual-right', 0.9, {opacity: 0, delay: 0.6});
    TweenMax.from('#visual-desktop', 1.1, {opacity: 0, delay: 0.7});
    TweenMax.from('#visual-gear', 1.2, {opacity: 0, delay: 1});
    TweenMax.from('#visual-code', 1.2, {opacity: 0, delay: 0.7});
    TweenMax.from('#visual-bubble', 1.4, {opacity: 0, delay: 0.8});
});
