// Navbar Scroll Effect
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Simple Scroll Animation (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// Menu Tab Logic
const tabs = document.querySelectorAll(".menu-tab");
const menuItems = document.querySelectorAll(".menu-item");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.textContent.trim();
    filterMenu(category);
  });
});

function filterMenu(category) {
  const grid = document.querySelector(".menu-grid");
  grid.style.opacity = "0";

  setTimeout(() => {
    menuItems.forEach((item) => {
      if (category === "All" || item.getAttribute("data-category") === category) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
    grid.style.opacity = "1";
    // Trigger AOS refresh if needed
  }, 300);
}

// Initial filter for default active tab
document.addEventListener("DOMContentLoaded", () => {
  const activeTab = document.querySelector(".menu-tab.active");
  if (activeTab) filterMenu(activeTab.textContent.trim());
});

// Booking Form Submission (Simulation)
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = bookingForm.querySelector('button');
        const originalText = btn.textContent;
        
        btn.disabled = true;
        btn.textContent = 'Processing...';
        
        setTimeout(() => {
            alert('Thank you! Your table reservation request has been received. We will call you shortly to confirm.');
            bookingForm.reset();
            btn.disabled = false;
            btn.textContent = originalText;
        }, 1500);
    });
}
