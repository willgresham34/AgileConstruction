<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="mb-2 flex flex-row items-center justify-between bg-primary p-2 text-white">
	<div class="flex flex-row">
		<img src="/Agile_Logo.JPEG" alt="Logo" height="auto" width="60px" />
		<h1>Agile Construction</h1>
	</div>

	<ul class="justfity-between flex pr-4">
		<li><a href="/">Home</a></li>
		<li>|</li>
		<li><a href="/about">About</a></li>
		<li>|</li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>

{@render children()}

<style>
	li {
		font-size: larger;
		padding: 0rem 0.5rem;
	}
</style>
