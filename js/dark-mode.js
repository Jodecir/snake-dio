const html = document.querySelector('html');
const chk = document.getElementById('chk');

chk.addEventListener('change', function() {
	html.classList.toggle('dark');
});