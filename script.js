// Toggle dark mode
document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  
  // On form validation
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const greeting = document.getElementById('greeting');
  
    // Simple email regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    greeting.textContent = `Hello ${name}, thanks for your message! We'll reply to ${email}.`;
    this.reset();
  });
  
