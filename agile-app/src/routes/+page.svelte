<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';

	const images = import.meta.glob('/builds/horiz/*.{jpg,png,jpeg}', {
		query: '?url',
		import: 'default'
	});

	const plugin = Autoplay({ delay: 5000, stopOnInteraction: true });
	const options = {
		align: 'start',
		containScroll: 'trimSnaps',
		slidesToScroll: 1
	};

	let imageUrls = [];
	for (const path in images) {
		imageUrls.push(images[path]());
	}
</script>

<div class="w-full">
	<div class="background-container">
		<div class="flex w-full items-center justify-center" id="homeBanner">
			<div class="bannerText flex flex-col items-center">
				<h1>Building homes in Georgia with over 25+ years of experience</h1>
				<h2>State Licensed we are your go-to for any residential construction project needs!</h2>
			</div>
		</div>
	</div>

	<div class="w-full">
		<div class="mx-12 my-5 flex h-full flex-col items-center gap-4">
			<h2>Welcome Home!</h2>
			<h3>
				At Agile Construction, we're dedicated to bringing your vision for your home to life.
				Whether you're dreaming of starting from the ground up with a brand-new build, enhancing
				your living space with a custom addition, or simply adding the perfect deck to enjoy your
				outdoor moments, we're here to help every step of the way. Our goal is to make the process
				smooth, enjoyable, and tailored to your needs, so you can sit back and watch your dreams
				become a reality. Let us help you create a home you'll love for years to come!
			</h3>
			<div class="mt-4">
				<a href="/contact" class="bg-primary rounded-lg p-2 text-xl text-white"
					>Get Free Estimate!</a
				>
			</div>
		</div>
	</div>
	<div class="mb-4">
		<Carousel.Root plugins={[plugin]} opts={options}>
			<Carousel.Content>
				<Carousel.Item class="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
					><img src="/builds/horiz/dads_house.jpg" alt="build1" /></Carousel.Item
				>
				<Carousel.Item class="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
					><img src="/builds/horiz/cool_house2.jpg" alt="build2" /></Carousel.Item
				>
				<Carousel.Item class="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
					><img src="/builds/horiz/AddOnR4.jpeg" alt="build3" /></Carousel.Item
				>
				<Carousel.Item class="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
					><img src="/builds/horiz/BackYard_Remodel.jpg" alt="build4" /></Carousel.Item
				>
				<Carousel.Item class="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
					><img src="/builds/horiz/AddOnRoom.jpeg" alt="build5" /></Carousel.Item
				>
			</Carousel.Content>
		</Carousel.Root>
	</div>
</div>

<style>
	h1 {
		font-size: xxx-large;
	}

	h2 {
		font-size: x-large;
	}
	h3 {
		font-size: large;
		text-align: center;
	}

	#homeBanner {
		position: relative;
		width: 100%; /* Adjust as needed */
		height: 40vh; /* Adjust as needed */
		overflow: hidden; /* Ensure pseudo-element stays within bounds */
	}

	#homeBanner::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/dads_house.jpg');
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

	@media (max-width: 640px) {
		h1 {
			font-size: xx-large; /* Smaller font size for small screens */
		}

		h2 {
			font-size: large; /* Adjust font size */
		}

		h3 {
			font-size: medium; /* Adjust font size */
		}

		#homeBanner {
			height: 25vh; /* Adjust height for smaller screens */
		}

		.bannerText {
			padding: 0.5em; /* Reduce padding */
		}
	}
</style>
