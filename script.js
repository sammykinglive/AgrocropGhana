// JavaScript for the slideshow
const slideshowImages = document.querySelectorAll('.slideshow-image');
let currentImageIndex = 0;

function showNextImage() {
  const currentImage = slideshowImages[currentImageIndex];
  currentImage.classList.remove('active');

  currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
  const nextImage = slideshowImages[currentImageIndex];
  nextImage.classList.add('active');
}

setInterval(showNextImage, 5000); // Change image every 3 seconds






 // Create a new Intersection Observer
 var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      animateIcons();
    }
  });
});

// Observe the target element
observer.observe(document.querySelector('.about-icons'));

function animateIcons() {
  $('.icon').each(function(index) {
    var animation = 'animate__fadeInUp'; // Choose the animation class from Animate.css
    var delay = index * 200; // Delay between animations for each icon

    $(this).addClass('animate__animated ' + animation);
    $(this).css('animation-delay', delay + 'ms');
  });
}





var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      animateItems(entry.target);
    }
  });
});

$('.grid-item').each(function() {
  observer.observe(this);
});

function animateItems(target) {
  $(target)
    .find('.product-card')
    .each(function(index) {
      var animation = 'animate__fadeInUp'; // Choose the animation class from Animate.css
      var delay = index * 200; // Delay between animations for each card

      $(this).addClass('animate__animated ' + animation);
      $(this).css('animation-delay', delay + 'ms');
    });
}




//scroll effect for product section





// animate on scroll

AOS.init({
  duration: 1500, // Animation duration (in milliseconds)
  once: true, // Animation will trigger only once
});





// Show or hide the scroll-up button based on scroll position
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollUpBtn = document.getElementById("scrollUpBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollUpBtn.style.display = "block";
  } else {
      scrollUpBtn.style.display = "none";
  }
}

// Scroll to the top when the button is clicked
document.getElementById("scrollUpBtn").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});


