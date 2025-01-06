<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();
	let isMenuOpen = $state(false);
	let currentPath = $state('');

	// Determine the current URL path
	onMount(() => {
		currentPath = window.location.pathname;
	});

	afterNavigate(() => {
		currentPath = window.location.pathname;
	});

	function handleResize() {
		if (window.innerWidth > 640) {
			isMenuOpen = true;
		} else {
			isMenuOpen = false;
		}
	}

	function toggleMenu() {
		if (window.innerWidth < 640) {
			isMenuOpen = !isMenuOpen;
		}
	}

	onMount(() => {
		handleResize(); // Check size when component mounts
		window.addEventListener('resize', handleResize);

		// Cleanup listener when component is destroyed
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<nav
	class="bg-primary sticky top-0 z-10 flex items-center justify-between p-2 text-white shadow-xl"
>
	<div class="flex items-center">
		<a href="/">
			<img src="/Agile_Logo.JPEG" alt="Logo" height="60px" width="60px" />
		</a>
	</div>

	<!-- Hamburger Icon for small screens -->
	<button class="hamburger-icon block md:hidden" aria-label="Toggle Menu" onclick={toggleMenu}>
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</button>

	<!-- Navigation Menu -->
	<ul
		class="nav-links bg-accent-foreground flex pr-4 text-white md:static md:flex md:translate-y-0 md:flex-row md:opacity-100"
		class:hidden={!isMenuOpen}
		class:translate-y-full={isMenuOpen}
	>
		<li class:selected={currentPath === '/'}>
			<a href="/" onclick={toggleMenu}>Home</a>
		</li>
		<li class:selected={currentPath === '/about-us'}>
			<a href="/about-us" onclick={toggleMenu}>About Us</a>
		</li>
		<li class:selected={currentPath === '/gallery'}>
			<a href="/gallery" onclick={toggleMenu}>Gallery</a>
		</li>
		<li class:selected={currentPath === '/contact'}>
			<a href="/contact" onclick={toggleMenu}>Contact</a>
		</li>
	</ul>
</nav>

<div class="body">
	{@render children()}
</div>

<footer class="mt-8 text-white">
	<div class=" mx-auto max-w-7xl px-6 py-6">
		<div class="grid grid-cols-2 gap-6 sm:grid-cols-3">
			<!-- About, Contact, and Gallery Links -->
			<div>
				<h3 class="mb-4 text-lg font-semibold">Quick Links</h3>
				<ul>
					<li><a href="/about-us" class="text-slate-300 hover:text-white">About Us</a></li>
					<li><a href="/contact" class="text-slate-300 hover:text-white">Contact</a></li>
					<li><a href="/gallery" class="text-slate-300 hover:text-white">Gallery</a></li>
				</ul>
			</div>

			<!-- Social Media Links -->
			<div>
				<h3 class="mb-4 text-lg font-semibold">Follow Us</h3>
				<ul>
					<li>
						<a
							href="https://www.facebook.com/agileconstructionga/"
							target="_blank"
							class="text-slate-300 hover:text-white">Facebook</a
						>
					</li>
					<li>
						<a
							href="https://www.instagram.com/AgileConstruction/"
							target="_blank"
							class="text-slate-300 hover:text-white">Instagram</a
						>
					</li>
					<!-- <li><a href="#" class="text-slate-300 hover:text-white" target="_blank">Twitter</a></li> -->
				</ul>
			</div>

			<!-- Contact Info (Phone, Email) -->
			<div class="col-span-2 sm:col-span-1">
				<h3 class="mb-4 text-lg font-semibold">Contact Information</h3>
				<ul>
					<li>
						<a href="tel:+17705607975" class="text-slate-300 hover:text-white"
							>Phone: +1 (770) 560-7975</a
						>
					</li>
					<li>
						<a href="mailto:example@email.com" class=" text-slate-300 hover:text-white"
							>agileconstruction123@gmail.com</a
						>
					</li>
				</ul>
			</div>

			<!-- Site Maintained Info -->
		</div>
	</div>
	<div class=" flex w-full items-center justify-center gap-2 py-2">
		<div class="text-slate-400">Site developed and maintained by</div>
		<div class="font-semibold">Will Gresham</div>
	</div>
	<!-- <div class="mt-6 pt-4 text-center text-sm">
		<p>&copy; 2024 Agile Construction. All rights reserved.</p>
	</div> -->
</footer>

<style>
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
		background-color: #1d4263;
	}

	@keyframes fadeDown {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Hamburger Icon */
	.hamburger-icon {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 30px;
		height: 20px;
		cursor: pointer;
		animation: fadeDown 0.5s ease-out;
	}

	.body {
		animation: fadeIn 1s ease-in-out;
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

	.nav-links li.selected a {
		border-bottom: 2px solid white;
		padding-bottom: 0.25rem;
		color: #f0f0f0;
	}

	/* Media query for larger screens */
	@media (min-width: 640px) {
		.hamburger-icon {
			display: none;
		}

		.nav-links {
			display: flex;
			position: static;
			background-color: transparent;
			flex-direction: row;
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		}

		.nav-links li {
			padding: 0rem 0.5rem;
		}
	}
</style>
