/* REFS >>> 
    1) https://gsap.com/docs/v3/GSAP/
*/
import './index.scss'; // imports >>>
import gsap from "gsap";

console.log('JavaScript file connected.')

// event handler for mobile menu
const mobileMenuToggle = document.querySelector('.ham');
const mobileMenu = document.getElementById('mobile-menu');

let isOpen = false;

mobileMenuToggle.addEventListener('click', () => { // Toggle mobile menu
    mobileMenuToggle.classList.toggle('mobileMenuFadeIn');
    if (!isOpen) { // Slide the menu in
        gsap.to(mobileMenu, {
            x: '0%', // Move to view
            duration: 0.5,
            ease: 'power1.out',
        });
        mobileMenuToggle.classList.remove('mobileMenuFadeOut');
    } else { // Slide the menu out
        gsap.to(mobileMenu, {
            x: '-100%', // Slide off-screen
            duration: 0.5,
            ease: 'power1.in',
        });
        mobileMenuToggle.classList.add('mobileMenuFadeOut');
    }

    isOpen = !isOpen; // Toggle the state
});