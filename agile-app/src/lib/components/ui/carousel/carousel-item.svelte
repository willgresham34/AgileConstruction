<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { getEmblaContext } from "./context.js";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<div
	role="group"
	aria-roledescription="slide"
	class={cn(
		"min-w-0 shrink-0 grow-0 basis-full",
		className
	)}
	data-embla-slide=""
	{...$$restProps}
>
	<slot />
</div>
