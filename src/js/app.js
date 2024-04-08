let activeHole = 1;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function deactivateHole(index) { getHole(index).className = 'hole'; }

function activateHole(index) { getHole(index).className = 'hole hole_has-mole'; }

setInterval(() => {
  deactivateHole(activeHole);
  let r = true;
  while (r) {
    const newActiveHole = Math.floor(1 + Math.random() * 16);
    if (newActiveHole !== activeHole) {
      r = false;
      activeHole = newActiveHole;
    }
  }
  activateHole(activeHole);
}, 800);
