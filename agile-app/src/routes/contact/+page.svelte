<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Separator } from '$lib/components/ui/separator';
	import { text } from '@sveltejs/kit';
	import { Textarea } from '$lib/components/ui/textarea';
	let contactInfo = '';

	const handleSubmit = (event: Event) => {
		event.preventDefault(); // Prevent the default form submission
		// Handle the form submission logic here, e.g., sending data to an API
		console.log('Submitted:', contactInfo);
	};
</script>

<div>
	<div class=" flex flex-col items-center gap-4 p-4">
		<h1 class="contact">Contact Us</h1>
	</div>
	<div class="mx-2">
		<div class="bg-primary grid grid-cols-2 gap-4 rounded-xl border p-4 shadow-xl">
			<!-- left col -->
			<div class="grid grid-cols-2">
				<div class="flex flex-col items-center justify-center">
					<div class="text-gray-500 transition duration-200 hover:text-blue-500" id="phoneIcon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="h-full w-full fill-current"
						>
							<path
								d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z"
							/>
						</svg>
					</div>
					<h2 class="text-xl text-white">Call Us</h2>
					<h1 class="text-white">770-560-7975</h1>
				</div>
			</div>
			<!-- right col -->
			<div class="rounded-lg bg-white p-2">
				<form on:submit={handleSubmit}>
					<div class="form-body flex flex-col gap-3 p-2">
						<div>
							<Label for="email">Email</Label>
							<Input type="email" id="email" placeholder="example@gmail.com" class="" />
						</div>
						<div class="flex w-full gap-2">
							<div class="w-1/2">
								<Label for="firstName">First Name</Label>
								<Input type="firstName" id="firstName" placeholder="John" class="" />
							</div>
							<div class="w-1/2">
								<Label for="lastName">Last Name</Label>
								<Input type="lastName" id="lastName" placeholder="Doe" class="" />
							</div>
						</div>
						<div>
							<Label for="subject">Subject</Label>
							<Input type="subject" id="subject" placeholder="Quote" class="" />
						</div>
						<div>
							<Label for="subject">Message</Label>
							<Textarea type="subject" id="subject" placeholder="" class="h-56" />
						</div>

						<Button type="submit" class="text-lg font-semibold">Send</Button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	#phoneIcon {
		height: 50px;
		width: auto;
	}

	.contact {
		font-size: 40px;
	}
</style>
