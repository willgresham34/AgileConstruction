<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import { carouselPhotos } from '$lib/carouselPhotos';

	const plugin = Autoplay({ delay: 5000, stopOnInteraction: true });
</script>

<div class="w-full">
	<div class="background-container">
		<div class="flex w-full items-center justify-center" id="homeBanner">
			<div class="bannerText flex flex-col items-center">
				<h1>New Home and Renovation Experts</h1>
				<span class="bannerSubText">Over 25 Years of Experience! State Licensed and Insured!</span>
			</div>
		</div>
	</div>

	<div class="w-full">
		<div class="m-12 flex h-full flex-col items-center gap-4">
			<h2>Welcome Home!</h2>
			<h3>
				At Agile Construction, we're dedicated to bringing the vision for your home to life. Whether
				you're dreaming of starting from the ground up with a brand-new build, enhancing your living
				space with a custom addition, or simply adding the perfect deck to enjoy your outdoor
				moments, we're here to help every step of the way. We want to be your Builder for life!
			</h3>
			<div class="mt-4">
				<a
					href="/contact"
					class="bg-accent hover:bg-accent-foreground rounded-lg px-6 py-3 text-lg text-white"
					>Get Free Estimate!</a
				>
			</div>
		</div>
	</div>
	<div class="carousel mb-4">
		<Carousel.Root plugins={[plugin]}>
			<Carousel.Content>
				{#each carouselPhotos as photo}
					<Carousel.Item class=" basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
						><img src={`/builds/${photo}`} alt="build1" /></Carousel.Item
					>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>
	<div class="my-4 grid w-full grid-cols-1 sm:grid-cols-2">
		<div class="grid-item mb-8 flex items-center justify-center sm:mb-0">
			<section class="h-auto">
				<div class="mx-auto px-4">
					<h2 class="">Constructions We Handle:</h2>
					<div class="text-center sm:text-start">
						<ul class=" grid grid-cols-1 py-2 sm:grid-cols-2">
							<li class="bannerSubText">New Builds</li>
							<li class="bannerSubText">Basements</li>
							<li class="bannerSubText">Kitchens</li>
							<li class="bannerSubText">Bathrooms</li>
							<li class="bannerSubText">Sunrooms</li>
							<li class="bannerSubText">Additions</li>
							<li class="bannerSubText">New Roofs</li>
							<li class="bannerSubText">Grading</li>
							<li class="bannerSubText">Driveway Pours</li>
							<li class="bannerSubText">Covered Porches and Decks</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
		<div class="grid-item flex w-full items-center justify-center">
			<div class="w-1/3 sm:w-2/3">
				<div class="logoContainer bg-primary">
					<img src="/Agile_Logo.JPEG" alt="logo" class="logo-image" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	h1 {
		font-size: 56px;
	}

	h2 {
		font-size: xx-large;
	}
	h3 {
		font-size: x-large;
		text-align: center;
	}

	.bannerSubText {
		font-size: x-large;
	}

	#homeBanner {
		position: relative;
		width: 100%;
		height: 40vh;
		overflow: hidden;
	}

	#homeBanner::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/builds/D_house.avif');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(40%);
		z-index: 1;
	}

	.bannerText {
		position: relative;
		z-index: 2;
		color: white;
		text-align: center;
		padding: 1em;
	}

	.carousel img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 4 / 3;
	}

	.logoContainer {
		padding: 0.5rem;
		aspect-ratio: 1/1; /* Ensures the container maintains a square aspect ratio */
		border: 0.25rem solid white;
		border-radius: 50%;
		text-align: center;
		box-shadow:
			0 4px 6px rgba(0, 0, 0, 0.5),
			0 4px 4px rgba(0, 0, 0, 0.5);

		display: flex;
		justify-content: center; /* Centers the image horizontally */
		align-items: center; /* Centers the image vertically */
	}

	.logo-image {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		border-radius: 50%;
	}

	@media (max-width: 1280px) {
		h1 {
			font-size: xxx-large;
		}

		h2 {
			font-size: x-large;
		}
		h3 {
			font-size: large;
		}
	}

	@media (max-width: 640px) {
		h1 {
			font-size: larger;
			font-weight: 600;
		}

		h2 {
			font-size: large;
		}

		h3 {
			font-size: medium;
		}

		.bannerSubText {
			font-size: medium;
		}

		#homeBanner {
			height: 25vh;
		}

		.bannerText {
			padding: 0.5em;
		}
	}
</style>
