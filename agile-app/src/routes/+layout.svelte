<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav
	class="bg-primary sticky top-0 z-10 flex flex-row items-center justify-between p-2 text-white shadow-xl"
>
	<div class="flex flex-row">
		<img src="/Agile_Logo.JPEG" alt="Logo" height="auto" width="60px" />
		<div class="flex flex-col px-2">
			<h1 class="font-xl">Agile</h1>
			<h3>Construction</h3>
		</div>
	</div>

	<ul class="justfity-between flex pr-4">
		<li><a href="/">Home</a></li>
		<li>|</li>
		<li><a href="/about">About</a></li>
		<li>|</li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>

<div class="body">
	{@render children()}
</div>

<footer class="flex items-end justify-center">
	<div class="m-2 text-slate-400">Site maintained by Will Gresham</div>
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
		height: 3vh;
	}
</style>
