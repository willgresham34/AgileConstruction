<script lang="ts">
	import { galleryPhotos } from './../../lib/galleryPhotos';
	import CardImage from '$lib/components/ui/cardImage/CardImage.svelte';
</script>

<div class="flex w-full flex-col items-center">
	<h1 class="m-4 text-3xl">Gallery</h1>
	<div class="grid grid-cols-2 gap-2 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
		{#each galleryPhotos as photo}
			<CardImage imageSrc={`/builds/horiz/${photo}`} altText="Build" />
		{/each}
	</div>
</div>
