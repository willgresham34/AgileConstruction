<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchPhotosFromPhotoset } from '$lib/flickrService';

	let galleryPhotos: any[] = [];

	onMount(async () => {
		galleryPhotos = await fetchPhotosFromPhotoset('72177720323058330');
	});

	// Current index of the modal
	let currentIndex = 0;

	// Function to update the current index
	const setCurrentIndex = (index: number) => {
		currentIndex = index;
	};

	// Modal visibility state
	let showModal = false;

	const openModal = () => (showModal = true);
	const closeModal = () => (showModal = false);

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			openModal();
		}
	};

	const showNext = () => {
		const nextIndex = (currentIndex + 1) % galleryPhotos.length;
		setCurrentIndex(nextIndex);
	};

	const showPrevious = () => {
		const prevIndex = (currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
		setCurrentIndex(prevIndex);
	};
</script>

<div class="flex w-full flex-col items-center">
	<h1 class="m-4 text-3xl">Gallery</h1>
	<div class="grid grid-cols-2 gap-2 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
		{#each galleryPhotos as photo, i}
			<div
				class="card w-auto"
				role="button"
				tabindex="0"
				aria-label={`Open image ${i}`}
				on:click={() => {
					openModal();
					setCurrentIndex(i);
				}}
				on:keydown={handleKeydown}
			>
				<img src={photo.src} alt={`Build ${photo.title}`} />
			</div>
		{/each}
	</div>
</div>

<!-- Modal -->
{#if showModal}
	<div class="modal" role="dialog" aria-modal="true" aria-label="Enlarged image">
		<button class="close-btn" on:click={closeModal} tabindex="0">&times;</button>
		<img src={galleryPhotos[currentIndex].src} alt={`Build ${currentIndex}`} />

		<!-- Previous Button -->
		<button class="prev-btn" on:click={showPrevious}>&larr;</button>

		<!-- Next Button -->
		<button class="next-btn" on:click={showNext}>&rarr;</button>
	</div>
{/if}

<style>
	.card {
		max-width: 300px;
		max-height: 225px;
		overflow: hidden;
		border-radius: 8px;
		cursor: pointer;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
	}

	.card img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 4 / 3;
	}

	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal img {
		max-width: 90%;
		max-height: 90%;
		border-radius: 10px;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
	}

	.close-btn {
		position: absolute;
		top: 20px;
		right: 30px;
		color: #fff;
		font-size: 2rem;
		cursor: pointer;
		user-select: none;
	}

	.prev-btn,
	.next-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		color: white;
		border: none;
		font-size: 2.5rem;
		padding: 0.5rem 0.5rem;
		cursor: pointer;
		user-select: none;
		border-radius: 25%;
	}

	.prev-btn {
		left: 10px;
	}

	.next-btn {
		right: 10px;
	}
</style>
