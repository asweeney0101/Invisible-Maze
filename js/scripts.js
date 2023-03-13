const player = document.getElementById('player');
const outline = document.getElementById('outline');

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft'){
    event.preventDefault(); 
    const currentLeft = parseInt(player.style.left) || 20; 
    const newLeft = currentLeft - 20; 
    player.style.left = `${newLeft}px`; 
  }
  else if (event.key === 'ArrowRight'){
    event.preventDefault(); 
    const currentLeft = parseInt(player.style.left) || 20; 
    const newLeft = currentLeft + 20;
    player.style.left = `${newLeft}px`;
  }
  else if (event.key === 'ArrowDown'){
    event.preventDefault();
    const currentTop = parseInt(player.style.top) || 150;
    const newTop = currentTop + 20;
    player.style.top = `${newTop}px`;
  }
  else if (event.key === 'ArrowUp'){
    event.preventDefault();
    const currentTop = parseInt(player.style.top) || 150;
    const newTop = currentTop - 20;
    player.style.top = `${newTop}px`;
  }
});