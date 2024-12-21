<script lang="ts">
	import { galleryPhotos } from './../../lib/galleryPhotos';
	import CardImage from '$lib/components/ui/cardImage/CardImage.svelte';

	// Current index of the modal
	let currentIndex = 0;

	// Function to update the current index
	const setCurrentIndex = (index: number) => {
		currentIndex = index;
	};
</script>

<div class="flex w-full flex-col items-center">
	<h1 class="m-4 text-3xl">Gallery</h1>
	<div class="grid grid-cols-2 gap-2 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
		{#each galleryPhotos as photo, i}
			<CardImage
				imageSrc={`/builds/${photo}`}
				altText="Build"
				photos={galleryPhotos.map((p) => `/builds/${p}`)}
				currentIndex={i}
				{setCurrentIndex}
			/>
		{/each}
	</div>
</div>
