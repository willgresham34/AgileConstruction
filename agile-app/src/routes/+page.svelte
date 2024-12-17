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
	<Carousel.Root plugins={[plugin]}>
		<Carousel.Content>
			<Carousel.Item class="basis-1/3 lg:basis-1/4 xl:basis-1/5"
				><img src="/builds/horiz/dads_house.jpg" alt="build1" /></Carousel.Item
			>
			<Carousel.Item class="basis-1/3 lg:basis-1/4 xl:basis-1/5"
				><img src="/builds/horiz/cool_house2.jpg" alt="build2" /></Carousel.Item
			>
			<Carousel.Item class="basis-1/3 lg:basis-1/4 xl:basis-1/5"
				><img src="/builds/horiz/AddOnR4.jpeg" alt="build3" /></Carousel.Item
			>
			<Carousel.Item class="basis-1/3 lg:basis-1/4 xl:basis-1/5"
				><img src="/builds/horiz/BackYard_Remodel.jpg" alt="build4" /></Carousel.Item
			>
			<Carousel.Item class="basis-1/3 lg:basis-1/4 xl:basis-1/5"
				><img src="/builds/horiz/AddOnRoom.jpeg" alt="build5" /></Carousel.Item
			>
		</Carousel.Content>
	</Carousel.Root>
</div>

<style>
	.carCont {
		max-height: 40vh;
	}
</style>
