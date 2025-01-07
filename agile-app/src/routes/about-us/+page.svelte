<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import { familyPhotos } from '$lib/familyPhotos';

	const plugin = Autoplay({ delay: 5000, stopOnInteraction: true });
</script>

<div class="flex h-fit flex-col items-center justify-center">
	<div class="w-full pt-6 text-center">
		<h1 class="text-xl font-semibold sm:text-3xl">About Us</h1>
	</div>
	<div class="about-us grid grid-cols-1 gap-4 lg:grid-cols-2">
		<div class="flex items-center justify-center">
			<img class="team-photo" src="KrissyAndMichael.avif" alt="Our Team" />
		</div>
		<div class="lg:text-md text-lg">
			<p>
				Welcome to <span class="text-accent-foreground font-semibold">Agile Construction</span>,
				your trusted partner for all your construction and renovation needs! Our founder Michael
				Gresham Jr is a second generation builder who has been serving all over Georgia for over
				<span class="text-accent-foreground font-semibold"> 30 years</span>.
			</p>
			<p>
				Our journey began with a simple mission: to provide high-quality craftsmanship and
				personalized service to every client. Today, that mission remains at the heart of everything
				we do. From home renovations to custom builds, we will work tirelessly to help bring your
				vision to life.
			</p>
			<p>
				At <span class="text-accent-foreground font-semibold">Agile Construction</span>, we take
				pride in treating every project as if it were our own. Our dedicated team and trusted
				partners consistently deliver exceptional quality at the right price. As a family-owned
				company, we value building strong relationships with our clients and creating spaces that
				bring people together.
			</p>

			<p>We look forward to building something great together!</p>
		</div>
	</div>
	<div class="cursive-header flex flex-wrap justify-center text-xl">
		<h1 class="">From My Family To Yours&nbsp;</h1>
		<h1 class="">Thank You For Your Business</h1>
	</div>

	<div class="carousel mb-4">
		<Carousel.Root plugins={[plugin]}>
			<Carousel.Content>
				{#each familyPhotos as photo}
					<Carousel.Item class=" basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
						><img src={`/family/${photo}`} alt="familyPhoto" /></Carousel.Item
					>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>
</div>

<style>
	.cursive-header {
		/* font-family: 'Great Vibes', cursive; */
		font-weight: 600;
		text-align: center;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
	.about-us {
		padding: 1rem 3rem;
		font-family: Arial, sans-serif;
		color: #333;
		line-height: 1.6;
		max-width: 1500px;
		min-width: 75vw;
	}

	h1 {
		text-align: center;
		color: #2c3e50;
	}

	.team-photo {
		width: 100%;
		object-fit: cover;
		margin: 1rem 0;
		border-radius: 8px;
		aspect-ratio: 1/1;
		max-width: 600px;
	}

	p {
		margin: 1rem 0;
	}

	.carousel img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 4 / 3;
	}
</style>
