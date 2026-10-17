// Light/dark toggle. Follows the OS setting until the visitor picks one.
(function () {
	var root = document.documentElement;
	var media = window.matchMedia('(prefers-color-scheme: dark)');

	function current() {
		return root.getAttribute('data-theme') || (media.matches ? 'dark' : 'light');
	}

	function sync() {
		var dark = current() === 'dark';
		document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
			btn.setAttribute('aria-pressed', String(dark));
		});
	}

	document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
		btn.addEventListener('click', function () {
			var next = current() === 'dark' ? 'light' : 'dark';
			root.setAttribute('data-theme', next);
			try { localStorage.setItem('theme', next); } catch (e) {}
			sync();
		});
	});

	media.addEventListener('change', sync);
	sync();
})();
