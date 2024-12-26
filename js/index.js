// testimonial section owl carousel

$('.carousel-2').owlCarousel({
  loop:true,
  margin:20,
  autoplay:true,
  center:true,
  autoplayTimeout:4500,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
          loop:true,
          autoplay:true
      },
      600:{
          items:2,
          nav:false,
          loop:true,
          autoplay:true
      },
      1000:{
          items:3,
          nav:false,
          loop:true,
          autoplay:true
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



// faq js

document.querySelectorAll('.faq-question').forEach((question) => {
question.addEventListener('click', () => {
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
    answer.style.display = 'block'; // Show the corresponding answer
  }
});
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






// Select all FAQ questions
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through each question and attach the click event
faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        // Toggle logic for the clicked question
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.icon');
        const isAnswerVisible = answer.style.display === 'block'; // Check if already open

        // Close all answers and reset icons and background color
        faqQuestions.forEach((q) => {
            const siblingAnswer = q.nextElementSibling;
            const siblingIcon = q.querySelector('.icon');
            siblingAnswer.style.display = 'none'; // Hide all answers
            siblingIcon.style.transform = 'rotate(0deg)'; // Reset all icons
            q.style.backgroundColor = ''; // Reset background color
        });

        // Toggle the clicked question's state
        if (!isAnswerVisible) {
            answer.style.display = 'block'; // Show current answer
            icon.style.transform = 'rotate(45deg)'; // Rotate current icon
            question.style.backgroundColor = '#1D4ED8'; // Set background color of clicked question
        }
    });
});






