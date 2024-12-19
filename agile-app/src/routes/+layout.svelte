<script lang="ts">
	import '../app.css';

	let { children } = $props();
	let isMenuOpen = $state(false);

	// Toggle menu visibility
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav
	class="bg-primary sticky top-0 z-10 flex items-center justify-between p-2 text-white shadow-xl"
>
	<div class="flex items-center">
		<img src="/Agile_Logo.JPEG" alt="Logo" height="auto" width="60px" />
	</div>

	<!-- Hamburger Icon for small screens -->
	<button class="hamburger-icon block md:hidden" aria-label="Toggle Menu" onclick={toggleMenu}>
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</button>

	<!-- Navigation Menu -->
	<ul
		class="nav-links flex pr-4 text-white md:static md:flex md:translate-y-0 md:flex-row md:opacity-100"
		class:hidden={!isMenuOpen}
		class:translate-y-full={isMenuOpen}
	>
		<li><a href="/" onclick={toggleMenu}>Home</a></li>
		<li class="separatorLi">|</li>
		<li><a href="/about" onclick={toggleMenu}>About</a></li>
		<li class="separatorLi">|</li>
		<li><a href="/gallery" onclick={toggleMenu}>Gallery</a></li>
		<li class="separatorLi">|</li>
		<li><a href="/contact" onclick={toggleMenu}>Contact</a></li>
	</ul>
</nav>

<div class="body">
	{@render children()}
</div>

<footer class="flex items-end justify-center">
	<div class="m-2 text-slate-400">Site maintained by Will Gresham</div>
</footer>

<style>
	/* General styles */
	li {
		font-size: larger;
		padding: 0rem 0.5rem;
	}

	nav {
		height: 7vh;
		min-height: 65px;
	}

	.body {
		min-height: 90vh;
	}

	footer {
		height: 3vh;
	}

	/* Hamburger Icon */
	.hamburger-icon {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 30px;
		height: 20px;
		cursor: pointer;
	}

	.hamburger-icon .line {
		background-color: white;
		height: 3px;
		width: 100%;
		border-radius: 2px;
	}

	/* Hide nav-links by default on small screens */
	.nav-links {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background-color: #1a202c; /* Adjust to match theme */
		flex-direction: column;
		opacity: 0;
		visibility: hidden;
		transform: translateY(-100%);
		transition: all 0.3s ease-in-out;
	}

	.nav-links li {
		padding: 0.5rem;
		text-align: center;
	}

	.nav-links a {
		color: white;
		text-decoration: none;
	}

	/* Show nav-links when isMenuOpen is true */
	.nav-links.hidden {
		opacity: 0;
		visibility: hidden;
		transform: translateY(-100%);
	}

	.nav-links:not(.hidden) {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}

	.separatorLi {
		display: none;
	}

	/* Media query for larger screens */
	@media (min-width: 640px) {
		.hamburger-icon {
			display: none;
		}

		.nav-links {
			display: flex;
			position: static;
			background-color: #1d4263;
			flex-direction: row;
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		}

		.nav-links li {
			padding: 0rem 0.5rem;
		}

		.separatorLi {
			display: flex;
		}
	}
</style>
