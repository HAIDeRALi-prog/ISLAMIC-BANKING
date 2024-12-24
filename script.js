// Scroll-to-top Button Functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Testimonial Slider (Simple Auto-Slide)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

function nextTestimonial() {
    testimonials[currentTestimonial].style.display = 'none';
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
}

setInterval(nextTestimonial, 3000); // Slide every 3 seconds
