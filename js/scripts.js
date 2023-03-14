// const player = document.getElementById('player');
// const outline = document.getElementById('outline');

// document.addEventListener('keydown', (event) => {
//   if (event.key === 'ArrowLeft'){
//     event.preventDefault(); 
//     const currentLeft = parseInt(player.style.left) || 20; 
//     const newLeft = currentLeft - 20; 
//     player.style.left = `${newLeft}px`; 
//   }
//   else if (event.key === 'ArrowRight'){
//     event.preventDefault(); 
//     const currentLeft = parseInt(player.style.left) || 20; 
//     const newLeft = currentLeft + 20;
//     player.style.left = `${newLeft}px`;
//   }
//   else if (event.key === 'ArrowDown'){
//     event.preventDefault();
//     const currentTop = parseInt(player.style.top) || 150;
//     const newTop = currentTop + 20;
//     player.style.top = `${newTop}px`;
//   }
//   else if (event.key === 'ArrowUp'){
//     event.preventDefault();
//     const currentTop = parseInt(player.style.top) || 150;
//     const newTop = currentTop - 20;
//     player.style.top = `${newTop}px`;
//   }
// });


const player = document.getElementById('player');
const outline = document.getElementById('outline');

// Define the maze bounds as an object
const mazeBounds = {
  left: 20,
  right: outline.clientWidth - player.clientWidth - 20,
  top: outline.clientHeight * 0.1,
  bottom: outline.clientHeight - player.clientHeight - 20
};

// Define the player's starting position
const startingPosition = {
  left: outline.clientWidth * 0.5,
  top: outline.clientHeight * 0.5
};

// Set the player's initial position
player.style.left = `${startingPosition.left}px`;
player.style.top = `${startingPosition.top}px`;

// Listen for keydown events
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    const currentLeft = parseInt(player.style.left) || startingPosition.left;
    const newLeft = currentLeft - 10;
    if (newLeft < mazeBounds.left) {
      player.style.left = `${startingPosition.left}px`;
    } else {
      player.style.left = `${newLeft}px`;
    }
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    const currentLeft = parseInt(player.style.left) || startingPosition.left;
    const newLeft = currentLeft + 10;
    if (newLeft > mazeBounds.right) {
      player.style.left = `${startingPosition.left}px`;
    } else {
      player.style.left = `${newLeft}px`;
    }
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    const currentTop = parseInt(player.style.top) || startingPosition.top;
    const newTop = currentTop - 10;
    if (newTop < mazeBounds.top) {
      player.style.top = `${startingPosition.top}px`;
    } else {
      player.style.top = `${newTop}px`;
    }
  } else if (event.key === 'ArrowDown') {
    event.preventDefault();
    const currentTop = parseInt(player.style.top) || startingPosition.top;
    const newTop = currentTop + 10;
    if (newTop > mazeBounds.bottom) {
      player.style.top = `${startingPosition.top}px`;
    } else {
      player.style.top = `${newTop}px`;
    }
  }
});




