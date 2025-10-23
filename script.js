// FAQ Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (question && answer && icon) {
      question.addEventListener("click", function () {
        const isActive = item.classList.contains("active");

        // Close all other FAQ items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
            const otherIcon = otherItem.querySelector(".faq-icon");
            if (otherIcon) {
              otherIcon.textContent = "+";
            }
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove("active");
          icon.textContent = "+";
        } else {
          item.classList.add("active");
          icon.textContent = "−";
        }
      });
    }
  });
});

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const scrolled = window.pageYOffset;

  if (scrolled > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0px 2px 20px 0px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0px 0px 10px 0px rgba(0, 0, 0, 0.12)";
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".service-card, .step-item, .faq-item"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });
});

// Button hover effects
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});

// Service card hover effects
document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.boxShadow = "0px 20px 40px 0px rgba(0, 71, 142, 0.15)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "";
    });
  });
});

// Mobile menu toggle (for future mobile navigation)
function toggleMobileMenu() {
  const navMenu = document.querySelector(".nav-menu");
  const mobileMenuButton = document.querySelector(".mobile-menu-button");

  if (navMenu && mobileMenuButton) {
    navMenu.classList.toggle("active");
    mobileMenuButton.classList.toggle("active");
  }
}

// Language selector functionality
document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.querySelector(".language-selector");

  if (languageSelector) {
    languageSelector.addEventListener("click", function () {
      // Add language dropdown functionality here
      console.log("Language selector clicked");
    });
  }
});

// Form validation (if contact forms are added)
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "#e74c3c";
      isValid = false;
    } else {
      input.style.borderColor = "#ddd";
    }
  });

  return isValid;
}

// Loading state management
function showLoading(element) {
  element.classList.add("loading");
  element.style.pointerEvents = "none";
}

function hideLoading(element) {
  element.classList.remove("loading");
  element.style.pointerEvents = "auto";
}

// Utility function for debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimized scroll handler
const handleScroll = debounce(function () {
  const scrolled = window.pageYOffset;
  const navbar = document.querySelector(".navbar");

  if (scrolled > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0px 2px 20px 0px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0px 0px 10px 0px rgba(0, 0, 0, 0.12)";
  }
}, 10);

window.addEventListener("scroll", handleScroll);

// Performance optimization: Lazy loading for images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img[data-src]");
    lazyImages.forEach((img) => imageObserver.observe(img));
  });
}

// Accessibility improvements
document.addEventListener("DOMContentLoaded", function () {
  // Add keyboard navigation for FAQ items
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    if (question) {
      question.setAttribute("tabindex", "0");
      question.setAttribute("role", "button");
      question.setAttribute("aria-expanded", "false");

      question.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.click();
        }
      });
    }
  });

  // Update aria-expanded when FAQ items are toggled
  const faqObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const target = mutation.target;
        const question = target.querySelector(".faq-question");
        if (question) {
          question.setAttribute(
            "aria-expanded",
            target.classList.contains("active")
          );
        }
      }
    });
  });

  faqItems.forEach((item) => {
    faqObserver.observe(item, { attributes: true, attributeFilter: ["class"] });
  });
});

// Console log for debugging
console.log("FANR website loaded successfully!");
