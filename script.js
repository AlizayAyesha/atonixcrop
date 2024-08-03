document.addEventListener('mousemove', (e) => {
    const circle = document.querySelector('.cicle');
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;
  });