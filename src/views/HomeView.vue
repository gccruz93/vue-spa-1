<script setup>
import { RouterLink } from "vue-router";
import Carousel from "@/components/Carousel.vue";
import Map from "@/components/Map.vue";
import EquipeInfo from "@/components/EquipeInfo.vue";

const carouselTop = [
	{
		text: "First Slide",
		alt: "...",
		src: "https://mdbootstrap.com/img/Photos/Slides/img(15).jpg",
	},
	{
		text: "Second Slide",
		alt: "...",
		src: "https://mdbootstrap.com/img/Photos/Slides/img(22).jpg",
	},
	{
		text: "Third Slide",
		alt: "...",
		src: "https://mdbootstrap.com/img/Photos/Slides/img(23).jpg",
	},
];
</script>

<template>
	<main>
		<Carousel :items="carouselTop" background-color="#316633" class="h-56 sm:h-[480px] md:h-[45vh] -mx-4" />

		<div id="destaques" class="flex flex-col items-center w-full max-w-sm mx-auto pt-16 pb-8 relative">
			<p class="text-2xl mb-10 font-bold">DESTAQUES</p>
		</div>

		<div id="empresa" class="flex flex-col items-center w-full max-w-sm mx-auto pt-16 pb-8 relative">
			<p class="text-2xl mb-10 font-bold">EMPRESA</p>
		</div>

		<div id="materiais" class="flex flex-col items-center w-full max-w-sm mx-auto py-8 relative">
			<p class="text-2xl mb-10 font-bold">MATERIAIS</p>
		</div>

		<div class="flex items-center justify-center">
			<img src="https://mdbootstrap.com/img/Photos/Slides/img(23).jpg" />
		</div>

		<div id="equipe" class="flex flex-col items-center w-full mx-auto py-24 relative">
			<p class="text-2xl mb-20 font-bold">EQUIPE</p>

			<div>
				<div class="grid md:grid-flow-col gap-10 justify-center items-center mb-5">
					<EquipeInfo name="Lorem Ipsum" role="Lorem Ipsum" phone="(27) 999999999" email="email@gmail.com" />

					<EquipeInfo name="Lorem Ipsum" role="Lorem Ipsum" phone="(27) 999999999" email="email@gmail.com" />
				</div>

				<div class="grid lg:grid-flow-col md:grid-cols-2 gap-10 justify-center items-center">
					<EquipeInfo name="Lorem Ipsum" role="Lorem Ipsum" phone="(27) 999999999" email="email@gmail.com" />

					<EquipeInfo name="Lorem Ipsum" role="Lorem Ipsum" phone="(27) 999999999" email="email@gmail.com" />

					<EquipeInfo name="Lorem Ipsum" role="Lorem Ipsum" phone="(27) 999999999" email="email@gmail.com" />
				</div>
			</div>
		</div>

		<RouterLink to="/materiais">Saiba mais</RouterLink>

		<Map />
	</main>
</template>
