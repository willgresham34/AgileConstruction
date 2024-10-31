<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';

	const images = import.meta.glob('/builds/horiz/*.{jpg,png,jpeg}' , {query: '?url', import: 'default'})

	const plugin = Autoplay({ delay: 5000, stopOnInteraction: true });

	let imageUrls = [];
	for (const path in images) {
	    imageUrls.push(images[path]());
	}
</script>

<div class="w-full">
	<Carousel.Root plugins={[plugin]}>
		<Carousel.Content>
			<Carousel.Item class="basis-1/3 lg:basis-1/4 xl:basis-1/5"><img src="/builds/horiz/AddOnR2.jpeg" alt="build1"/></Carousel.Item>
			<Carousel.Item class="basis-1/3 lg:basis-1/4 xl:basis-1/5"><img src="/builds/horiz/AddOnR3.jpeg" alt="build2"/></Carousel.Item>
			<Carousel.Item class="basis-1/3 lg:basis-1/4 xl:basis-1/5"><img src="/builds/horiz/AddOnR4.jpeg" alt="build3"/></Carousel.Item>
			<Carousel.Item class="basis-1/3 lg:basis-1/4 xl:basis-1/5"><img src="/builds/horiz/AddOnR5.jpeg" alt="build4"/></Carousel.Item>
			<Carousel.Item class="basis-1/3 lg:basis-1/4 xl:basis-1/5"><img src="/builds/horiz/AddOnRoom.jpeg" alt="build5"/></Carousel.Item>
		</Carousel.Content>
	</Carousel.Root>
</div>

<style>
	.carCont {
		max-height: 40vh;
	}
</style>