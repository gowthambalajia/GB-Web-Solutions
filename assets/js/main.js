// ---------- Loader ----------
window.addEventListener('load',()=>{
  const loader = document.getElementById('loader');
  if(loader) setTimeout(()=>loader.classList.add('hide'),650);
});

// ---------- Cursor glow ----------
const glow = document.getElementById('cursor-glow');
if(glow){
  window.addEventListener('mousemove',e=>{
    glow.style.left = e.clientX+'px';
    glow.style.top = e.clientY+'px';
  });
}

// ---------- Header scroll state ----------
const header = document.getElementById('site-header');
const topFab = document.getElementById('top-fab');
window.addEventListener('scroll',()=>{
  const y = window.scrollY;
  if(header) header.classList.toggle('scrolled', y>20);
  if(topFab) topFab.classList.toggle('show', y>600);
});
if(topFab) topFab.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// ---------- Mobile nav ----------
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const overlay = document.getElementById('overlay');
function closeMobile(){ if(mobileNav) mobileNav.classList.remove('open'); if(overlay) overlay.classList.remove('open'); }
if(hamburger) hamburger.addEventListener('click',()=>{mobileNav.classList.add('open');overlay.classList.add('open');});
if(overlay) overlay.addEventListener('click',closeMobile);
document.querySelectorAll('#mobile-nav a').forEach(a=>a.addEventListener('click',closeMobile));

// ---------- Theme toggle ----------
const themeToggle = document.getElementById('theme-toggle');
if(localStorage.getItem('gb-theme')==='light') document.documentElement.classList.add('light');
if(themeToggle){
  themeToggle.addEventListener('click',()=>{
    document.documentElement.classList.toggle('light');
    localStorage.setItem('gb-theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
  });
}

// ---------- Ripple on buttons ----------
document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('click',function(e){
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className='ripple';
    ripple.style.left = (e.clientX-rect.left)+'px';
    ripple.style.top = (e.clientY-rect.top)+'px';
    this.appendChild(ripple);
    setTimeout(()=>ripple.remove(),650);
  });
});

// ---------- Scroll reveal ----------
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('in');}
  });
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

// ---------- Animated counters ----------
const counters = document.querySelectorAll('.stat-num');
if(counters.length){
  const counterObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el = entry.target;
        const target = parseInt(el.dataset.count,10);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const duration = 1400;
        const start = performance.now();
        function tick(now){
          const progress = Math.min((now-start)/duration,1);
          const eased = 1-Math.pow(1-progress,3);
          current = Math.round(eased*target);
          el.textContent = current + suffix;
          if(progress<1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      }
    });
  },{threshold:0.5});
  counters.forEach(el=>counterObserver.observe(el));
}

// ---------- FAQ accordion (works for any .faq-item list already in DOM) ----------
function initFaqAccordion(){
  document.querySelectorAll('.faq-item').forEach(item=>{
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if(!q || q.dataset.bound) return;
    q.dataset.bound = "1";
    if(item.classList.contains('open')) a.style.maxHeight = a.scrollHeight+'px';
    q.addEventListener('click',()=>{
      const isOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(other=>{
        other.classList.remove('open');
        other.querySelector('.faq-a').style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight+'px';
      }
    });
  });
}
initFaqAccordion();

// ---------- Cookie consent ----------
const cookie = document.getElementById('cookie');
if(cookie && !localStorage.getItem('gb-cookie')){
  setTimeout(()=>cookie.classList.add('show'),1800);
}
const cookieAccept = document.getElementById('cookie-accept');
const cookieDecline = document.getElementById('cookie-decline');
if(cookieAccept) cookieAccept.addEventListener('click',()=>{cookie.classList.remove('show');localStorage.setItem('gb-cookie','accepted');});
if(cookieDecline) cookieDecline.addEventListener('click',()=>{cookie.classList.remove('show');localStorage.setItem('gb-cookie','declined');});

// ---------- WhatsApp FAB ----------
const waFab = document.getElementById('whatsapp-fab');

if (waFab) {
  waFab.addEventListener('click', () => {
    const message = encodeURIComponent(
      "Hi GB Web Solutions, I'm interested in building a website for my business."
    );

    window.open(
      `https://wa.me/917299302595?text=${message}`,
      '_blank'
    );
  });
}
// ---------- Contact Form ----------
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function () {

    // Wait a moment so the browser submits the form first
    setTimeout(() => {
      contactForm.style.display = "none";

      const success = document.getElementById("form-success");
      if (success) {
        success.classList.add("show");
      }
    }, 500);

  });
}
