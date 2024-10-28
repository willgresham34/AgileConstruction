<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';

	const plugin = Autoplay({ delay: 5000, stopOnInteraction: true });
</script>

<div class=" w-full border p-4">
	<Carousel.Root plugins={[plugin]}>
		<Carousel.Content>
			<Carousel.Item class="basis-1/3">Item 1</Carousel.Item>
			<Carousel.Item class="basis-1/3">Item 2</Carousel.Item>
			<Carousel.Item class="basis-1/3">Item 3</Carousel.Item>
			<Carousel.Item class="basis-1/3">Item 4</Carousel.Item>
			<Carousel.Item class="basis-1/3">Item 5</Carousel.Item>
		</Carousel.Content>
	</Carousel.Root>
</div>
