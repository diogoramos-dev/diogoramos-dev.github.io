class SiteHeader extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<header class="top-nav">
				<div class="nav-container">
					<a href="index.html" class="top-nav__logo-link" aria-label="Diogo Ramos Home">
						<img src="favicon-32x32.png" alt="Diogo Ramos logo" class="logo-img" />
					</a>
					<nav class="top-nav__nav" role="navigation" aria-label="Primary Navigation">
						<ul class="top-nav__list">
							<li><a href="index.html" class="top-nav__link">Home</a></li>
							<li><a href="about.html" class="top-nav__link">About</a></li>
							<li><a href="projects.html" class="top-nav__link">Projects</a></li>
							<li><a href="blog.html" class="top-nav__link">Blog</a></li>
						</ul>
					</nav>
				</div>
			</header>
		`;
	}
}

class SiteFooter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<footer class="footer">
				&copy; 2025 Diogo Ramos
			</footer>
		`;
	}
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
