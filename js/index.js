// testimonial section owl carousel

$('.carousel-2').owlCarousel({
  loop:true,
  margin:20,
  autoplay:true,
  autoplayTimeout:4500,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      600:{
          items:2,
          nav:false,
      },
      1000:{
          items:3,
          nav:false,
      }
  }
});

// counter
document.addEventListener("DOMContentLoaded", () => {
const counters = document.querySelectorAll('.number'); // Select only the number spans

const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target'); // Get the target number
  const increment = target / 100; // Adjust speed
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      counter.textContent = Math.ceil(current); // Update the number
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target; // Ensure the final number is accurate
    }
  };

  updateCounter();
};

    // Set up Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      animateCounter(counter); // Animate the counter
      observer.unobserve(counter); // Stop observing to prevent re-triggering
    }
  });
  }, { threshold: 1.0 }); // Trigger when fully in view

counters.forEach(counter => observer.observe(counter)); // Observe each counter
});

// Nav open and close
function myfuncX() {
  document.getElementById("nav").style.display = "block";
  document.getElementById("nav2").style.display = "none";
}

function myfuncY() {
  document.getElementById("nav").style.display = "none";
  document.getElementById("nav2").style.display = "block";
}

// faq js

document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', (event) => {
    // Prevent the document click event from immediately closing the FAQ
    event.stopPropagation();

    // Find the corresponding answer
    const answer = question.nextElementSibling;

    // Check if the clicked question is already active
    const isActive = question.classList.contains('active');

    // Close all answers and remove active class from all questions
    document.querySelectorAll('.faq-answer').forEach((answer) => {
      answer.style.display = 'none';
    });
    document.querySelectorAll('.faq-question').forEach((q) => {
      q.classList.remove('active');
    });

    // If the question wasn't active, toggle its visibility
    if (!isActive) {
      question.classList.add('active');
      answer.style.display = 'block';
    }
  });
});


// Select all FAQ questions
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through each question and attach the click event
faqQuestions.forEach((question) => {
  question.addEventListener('click', (event) => {
    // Prevent the document click event from immediately closing the FAQ
    event.stopPropagation();

    // Toggle logic for the clicked question
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.icon');
    const isAnswerVisible = answer.style.display === 'block';

    // Close all answers and reset icons, background color, and text color
    faqQuestions.forEach((q) => {
      const siblingAnswer = q.nextElementSibling;
      const siblingIcon = q.querySelector('.icon');
      siblingAnswer.style.display = 'none'; 
      if (siblingIcon) siblingIcon.style.transform = 'rotate(0deg)';
      q.style.backgroundColor = '';
      q.style.color = 'black';
    });

    // Toggle the clicked question's state
    if (!isAnswerVisible) {
      answer.style.display = 'block'; 
      if (icon) icon.style.transform = 'rotate(45deg)';
      question.style.backgroundColor = '#1877F2';
      question.style.color = 'white';
    }
  });
});

// Close FAQs and reset styles when clicking outside
document.addEventListener('click', () => {
  faqQuestions.forEach((q) => {
    const answer = q.nextElementSibling;
    const icon = q.querySelector('.icon');
    answer.style.display = 'none';
    if (icon) icon.style.transform = 'rotate(0deg)';
    q.style.backgroundColor = '';
    q.style.color = 'black';
  });
});


// Initialize ScrollReveal
window.sr = ScrollReveal();

ScrollReveal().reveal('#hero-section', {
  delay: 200,   
  duration: 1000,
  scale: 0.6,     
  easing: 'ease-in-out',
  opacity: 0,        
  reset: true,  
  distance: '25px'
});

ScrollReveal().reveal('#service', {
  delay: 200,
  duration: 800,
  opacity: 0,
  distance: '100px',
  easing: 'ease-out',
  interval: 250, // Adjust to stagger the animations
  reset: true,
});

ScrollReveal().reveal('#why-us-section', {
  delay: 200,        
  duration: 600,
  opacity: 0,     
  distance: '50px',
  origin: 'left',    
  easing: 'ease-out',
  reset: true,   
});

ScrollReveal().reveal('#why-us-manager', {
  delay: 200,        
  duration: 600,
  opacity: 0,
  distance: '50px', 
  origin: 'left',    
  easing: 'ease-out',
  reset: true,  
});

ScrollReveal().reveal('#why-us-description', {
  delay: 200,        
  duration: 600,
  opacity: 0,
  distance: '50px', 
  origin: 'right',    
  easing: 'ease-out',
  reset: true,  
});

ScrollReveal().reveal('#why-us-readmore', {
  delay: 200,        
  duration: 600,
  opacity: 0,
  distance: '25px', 
  origin: 'right',    
  easing: 'ease-out',
  reset: true,  
});

ScrollReveal().reveal('#business', {
  delay: 200,           
  duration: 1000,   
  opacity: 0,      
  distance: '50px', 
  origin: 'bottom',  
  rotate: {            
      x: 0,             
      y: 180,        
      z: 0              
  },
  easing: 'ease-out',
  reset: true,     
});

ScrollReveal().reveal('#get-in-touch', {
  delay: 200,           
  duration: 800,   
  opacity: 0,   
  distance: '200px',
  origin: 'bottom', 
  easing: 'ease-out',   
  reset: false,     
});

ScrollReveal().reveal('#git-text', {
  delay: 200,        
  duration: 1000,
  scale: 0.7,         
  easing: 'ease-in-out',
  opacity: 0,        
  reset: true,      
  distance: '20px',
  origin: 'top',
});

ScrollReveal().reveal('#location-section', {
  delay: 200,        
  duration: 1000,
  opacity: 0,
  distance: '150px',   
  origin: 'bottom',     
  easing: 'ease-out',  
  reset: false, 
});

ScrollReveal().reveal('.faq-item', {
  opacity: 0,         
  y: 50,                 
  duration: 1.2,
  delay: 200,          
  easing: 'ease-out', 
  interval: 100,             
  distance: '50px',
  origin: 'bottom',       
});

ScrollReveal().reveal('#footer-section', {
  delay: 200,           
  duration: 800,
  opacity: 0,          
  scale: 0.5,           
  origin: 'bottom',
  easing: 'ease-out',  
  reset: true,
});

ScrollReveal().reveal('#nav', {
  origin: 'top', 
  distance: '100px',
  duration: 800,     
  delay: 300,           
  easing: 'ease-in-out',
  reset: false,
});