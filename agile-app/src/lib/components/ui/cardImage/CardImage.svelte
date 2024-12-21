<script>
	export let imageSrc = '';
	export let altText = '';
	/**
	 * @type {string | any[]}
	 */
	export let photos = [];
	export let currentIndex = 0;
	export let setCurrentIndex;

	// Modal visibility state
	let showModal = false;

	const openModal = () => (showModal = true);
	const closeModal = () => (showModal = false);

	const handleKeydown = (/** @type {{ key: string; }} */ event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			openModal();
		}
	};

	const showNext = () => {
		const nextIndex = (currentIndex + 1) % photos.length;
		setCurrentIndex(nextIndex);
	};

	const showPrevious = () => {
		const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
		setCurrentIndex(prevIndex);
	};
</script>

<div
	class="card w-auto"
	role="button"
	tabindex="0"
	aria-label="Open image"
	on:click={() => {
		openModal();
		setCurrentIndex(currentIndex);
	}}
	on:keydown={handleKeydown}
>
	<img src={imageSrc} alt={altText} width="auto" />
</div>

<!-- Modal -->
{#if showModal}
	<div class="modal" role="dialog" aria-modal="true" aria-label="Enlarged image">
		<button class="close-btn" on:click={closeModal} tabindex="0">&times;</button>
		<img src={photos[currentIndex]} alt={altText} />

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
