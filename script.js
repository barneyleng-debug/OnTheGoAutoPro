// script.js - simple form handler and small interactions
function handleForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const location = document.getElementById('location').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  if(!name || !phone || !location || !message){
    status.textContent = 'Please fill in name, phone, location and a short description.';
    return false;
  }

  // For the mockup: we don't have a backend. Show simulated success and provide a mailto option.
  status.textContent = 'Thanks — preparing your request...';
  setTimeout(()=>{
    status.innerHTML = 'Request prepared. <a href="mailto:barney.leng@onthegoautopro24.com?subject=Service%20Request&body=' + encodeURIComponent(
      'Name: '+name+'\nPhone: '+phone+'\nLocation: '+location+'\nMessage: '+message
    ) + '">Send via email</a> or set up a form endpoint (Formspree, Netlify Forms, or a simple server) in <code>README.md</code>.';
  },800);
  return false;
}

// small nicety: smooth anchor scroll
document.addEventListener('click', (e)=>{
  if(e.target.matches('a[href^="#"]')){
    e.preventDefault();
    const id = e.target.getAttribute('href');
    if(id === '#') return;
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
});
