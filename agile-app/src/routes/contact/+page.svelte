<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Textarea } from '$lib/components/ui/textarea';
	import * as Select from '$lib/components/ui/select';
	import type { Selected } from 'bits-ui';
	import emailjs from '@emailjs/browser';

	let formData = {
		email: '',
		phone: '',
		firstName: '',
		lastName: '',
		contactPreference: '',
		subject: '',
		message: ''
	};

	const handleContactPreferenceChange = (event: Selected<string> | undefined) => {
		const pref = event?.value ?? ''; //
		formData.contactPreference = pref;
	};

	const handleSubmit = async (event: Event) => {
		event.preventDefault();

		try {
			const response = await emailjs.send(
				'agileConEmailService',
				'agileCon_SiteEmail',
				formData,
				'WBUUvS6M_Z3niupKb'
			);
			console.log('Email sent successfully:', response);
			formData = {
				email: '',
				phone: '',
				firstName: '',
				lastName: '',
				contactPreference: '',
				subject: '',
				message: ''
			};
			alert('Your message has been sent!');
		} catch (error) {
			console.error('Failed to send email:', error);
			alert('There was an error sending your message.');
		}
	};
</script>

<div>
	<div class=" flex flex-col items-center gap-4 p-4">
		<h1 class="contact">Contact Us</h1>
	</div>
	<div class="mx-2">
		<div class=" grid grid-cols-1 gap-4 rounded-xl sm:grid-cols-2">
			<!-- left col -->
			<div
				class="bg-accent-foreground grid grid-cols-2 gap-4 rounded-xl p-4 shadow-2xl sm:grid-cols-1"
			>
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
					<a href="tel:+17705607975" class="text-white">770-560-7975</a>
				</div>
				<div class="flex flex-col items-center justify-center">
					<a
						href="https://www.facebook.com/agileconstructionga/"
						aria-label="Facebook link"
						target="_blank"
						id="facebookIcon"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="65"
							height="65"
							viewBox="0,0,256,256"
						>
							<g
								fill="#6b7280"
								fill-rule="nonzero"
								stroke="none"
								stroke-width="1"
								stroke-linecap="butt"
								stroke-linejoin="miter"
								stroke-miterlimit="10"
								stroke-dasharray=""
								stroke-dashoffset="0"
								font-family="none"
								font-weight="none"
								font-size="none"
								text-anchor="none"
								style="mix-blend-mode: normal"
								><g transform="scale(5.12,5.12)"
									><path
										d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h16.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h5.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h8.8418c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-8v-14h3.82031l1.40039,-7h-5.2207v-2c0,-0.55749 0.05305,-0.60107 0.24023,-0.72266c0.18718,-0.12159 0.76559,-0.27734 1.75977,-0.27734h3v-5.63086l-0.57031,-0.27149c0,0 -2.29704,-1.09766 -5.42969,-1.09766c-2.25,0 -4.09841,0.89645 -5.28125,2.375c-1.18284,1.47855 -1.71875,3.45833 -1.71875,5.625v2h-3v7h3v14h-16c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM32,15c2.07906,0 3.38736,0.45846 4,0.70117v2.29883h-1c-1.15082,0 -2.07304,0.0952 -2.84961,0.59961c-0.77656,0.50441 -1.15039,1.46188 -1.15039,2.40039v4h4.7793l-0.59961,3h-4.17969v16h-4v-16h-3v-3h3v-4c0,-1.83333 0.46409,-3.35355 1.28125,-4.375c0.81716,-1.02145 1.96875,-1.625 3.71875,-1.625z"
									></path></g
								></g
							>
						</svg>
					</a>
					<h2 class="text-xl text-white">Like our page!</h2>
				</div>
			</div>
			<!-- right col -->
			<div class=" rounded-lg border bg-white p-2 shadow-2xl">
				<form on:submit={handleSubmit} class="">
					<div class="form-body flex flex-col gap-3 p-2">
						<div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
							<div>
								<Label for="email">Email</Label>
								<Input
									type="email"
									id="email"
									placeholder="example@gmail.com"
									bind:value={formData.email}
								/>
							</div>
							<div>
								<Label for="phone">Phone # <span class="text-xs">(Optional)</span></Label>
								<Input
									type="text"
									id="phone"
									placeholder="123-456-7890"
									bind:value={formData.phone}
								/>
							</div>
						</div>
						<div class="flex w-full gap-2">
							<div class="w-1/2">
								<Label for="firstName">First Name</Label>
								<Input
									type="text"
									id="firstName"
									placeholder="John"
									bind:value={formData.firstName}
								/>
							</div>
							<div class="w-1/2">
								<Label for="lastName">Last Name</Label>
								<Input type="text" id="lastName" placeholder="Doe" bind:value={formData.lastName} />
							</div>
						</div>
						<div>
							<Label for="contactPreference">Contact Preference</Label>
							<Select.Root
								onSelectedChange={(v: Selected<string> | undefined) =>
									handleContactPreferenceChange(v)}
							>
								<Select.Trigger class="">
									<Select.Value placeholder="Please Choose one" />
								</Select.Trigger>
								<Select.Content>
									<Select.Item value="Email">Email</Select.Item>
									<Select.Item value="Text Message">Text Message</Select.Item>
									<Select.Item value="Phone Call">Phone Call</Select.Item>
								</Select.Content>
								<Select.Input name="contactPreference" bind:value={formData.contactPreference} />
							</Select.Root>
						</div>

						<div>
							<Label for="subject">Subject</Label>
							<Input type="text" id="subject" placeholder="" bind:value={formData.subject} />
						</div>
						<div>
							<Label for="message">Message</Label>
							<Textarea id="message" placeholder="" class="h-56" bind:value={formData.message} />
						</div>

						<Button type="submit" class="bg-accent-foreground text-lg font-semibold">Send</Button>
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
