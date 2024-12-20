<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';

	const images = import.meta.glob('/builds/horiz/*.{jpg,png,jpeg}', {
		query: '?url',
		import: 'default'
	});

	const plugin = Autoplay({ delay: 5000, stopOnInteraction: true });

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
		<div class="m-12 flex h-full flex-col items-center gap-4">
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
				<a
					href="/contact"
					class="bg-accent hover:bg-accent-foreground rounded-lg px-6 py-3 text-lg text-white"
					>Get Free Estimate!</a
				>
			</div>
		</div>
	</div>
	<div class="mb-4">
		<Carousel.Root plugins={[plugin]}>
			<Carousel.Content>
				<Carousel.Item class="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
					><img src="/builds/horiz/dads_house.jpg" alt="build1" /></Carousel.Item
				>
				<Carousel.Item class="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
					><img src="/builds/horiz/cool_house2.jpg" alt="build2" /></Carousel.Item
				>
				<Carousel.Item class="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
					><img src="/builds/horiz/AddOnR4.jpeg" alt="build3" /></Carousel.Item
				>
				<Carousel.Item class="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
					><img src="/builds/horiz/BackYard_Remodel.jpg" alt="build4" /></Carousel.Item
				>
				<Carousel.Item class="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
					><img src="/builds/horiz/AddOnRoom.jpeg" alt="build5" /></Carousel.Item
				>
			</Carousel.Content>
		</Carousel.Root>
	</div>
	<div class="my-4 grid w-full grid-cols-1 sm:grid-cols-2">
		<div class="grid-item mb-8 flex items-center sm:mb-0">
			<section class="h-auto">
				<div class="mx-auto px-4 text-center">
					<div>
						<h2 class="mb-2 text-xl sm:text-2xl">About Agile Construction</h2>
						<h3 class="text-md mx-2 my-4 sm:text-lg">
							With over 25 years of experience in the construction industry, Agile Construction is
							dedicated to turning your dream home into a reality. From custom builds to innovative
							renovations, we bring unmatched expertise and attention to detail to every project we
							undertake.
						</h3>
					</div>
					<div class="py-3">
						<a
							href="/about"
							class="bg-accent hover:bg-accent-foreground rounded-lg px-6 py-3 text-lg text-white"
						>
							Learn More
						</a>
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
