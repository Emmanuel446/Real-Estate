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
      answer.style.display = 'block'; // Show the corresponding answer
    }
  });
});

// Close FAQs when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.faq-answer').forEach((answer) => {
    answer.style.display = 'none'; // Hide all answers
  });
  document.querySelectorAll('.faq-question').forEach((q) => {
    q.classList.remove('active'); // Remove active class
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
    const isAnswerVisible = answer.style.display === 'block'; // Check if already open

    // Close all answers and reset icons, background color, and text color
    faqQuestions.forEach((q) => {
      const siblingAnswer = q.nextElementSibling;
      const siblingIcon = q.querySelector('.icon');
      siblingAnswer.style.display = 'none'; // Hide all answers
      if (siblingIcon) siblingIcon.style.transform = 'rotate(0deg)'; // Reset all icons
      q.style.backgroundColor = ''; // Reset background color
      q.style.color = 'black'; // Reset text color
    });

    // Toggle the clicked question's state
    if (!isAnswerVisible) {
      answer.style.display = 'block'; // Show current answer
      if (icon) icon.style.transform = 'rotate(45deg)'; // Rotate current icon
      question.style.backgroundColor = '#1877F2'; // Set background color of clicked question
      question.style.color = 'white'; // Set text color to white
    }
  });
});

// Close FAQs and reset styles when clicking outside
document.addEventListener('click', () => {
  faqQuestions.forEach((q) => {
    const answer = q.nextElementSibling;
    const icon = q.querySelector('.icon');
    answer.style.display = 'none'; // Hide all answers
    if (icon) icon.style.transform = 'rotate(0deg)'; // Reset all icons
    q.style.backgroundColor = ''; // Reset background color
    q.style.color = 'black'; // Reset text color to black
  });
});