var navButton = document.getElementById('nav-button'),
	nav = document.getElementsByTagName('nav')[0],
    navBar = document.getElementById('nav-bar');

navButton.onclick = function() {
	if (navButton.className === 'open') {
		navButton.className = '';
		nav.className = '';
        navBar.className = '';
	} else {
		navButton.className = 'open';
		nav.className = 'open';
        navBar.className = 'open';
	}
};
