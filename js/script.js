function toggleMenu() {
  var gridMenu = document.getElementById('gridMenu');
  var menuButton = document.getElementById('menuButton');

  if (gridMenu.style.display === 'none' || gridMenu.style.display === '') {
    gridMenu.style.display = 'grid';
    menuButton.innerText = 'X';
  } else {
    gridMenu.style.display = 'none';
    menuButton.innerText = 'MENU';
  }
}
