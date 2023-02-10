const cursor = document.querySelector('.cursor');
document.onmousemove = (e) => {
  cursor.style.display = 'block';
  cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
  setTimeout(() => {
    cursor.style.opacity = '0';
  }, 2000);
};

window.onload = () => {
  const work = document.querySelector('.work');
  work.style.color = '#f9f9f9';
};