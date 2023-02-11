const cursor = document.querySelector('.cursor');
const work = document.querySelector('.work');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

document.onmousemove = (e) => {
  cursor.style.display = 'block';
  cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
  setTimeout(() => {
    cursor.style.opacity = '0';
  }, 2000);
};

window.onload = () => {
  work.style.color = '#f9f9f9';
};

about.onclick = () => {
  about.style.color = '#f9f9f9';
  work.style.color = '#5b5b5b';
  contact.style.color = '#5b5b5b';
};

work.onclick = () => {
  work.style.color = '#f9f9f9';
  about.style.color = '#5b5b5b';
  contact.style.color = '#5b5b5b';
};

contact.onclick = () => {
  contact.style.color = '#f9f9f9';
  work.style.color = '#5b5b5b';
  about.style.color = '#5b5b5b';
};