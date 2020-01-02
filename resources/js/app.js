import AOS from 'aos';
import SmoothScroll from 'smooth-scroll';

AOS.init({
    duration: 800,
    easing: 'ease-out-sine'
});
new SmoothScroll('a[href*="#"]');
