<script setup>
import { ref, nextTick } from "vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconMenu from "@/components/icons/IconMenu.vue";

const dropdown = ref(null);

async function loseFocus() {
	await nextTick();
	dropdown.value.blur();
}
</script>

<template>
	<header
		class="fixed lg:flex lg:relative top-0 left-0 right-0 mx-auto max-w-7xl lg:h-40 h-14 bg-white lg:bg-transparent bg-opacity-50"
	>
		<nav class="h-full flex flex-row items-center justify-center max-w-4xl mx-auto select-none">
			<div class="lg:hidden absolute left-2 top-[50%] translate-y-[-50%]">
				<div class="dropdown">
					<label tabindex="0" class="flex m-1 p-2 cursor-pointer" ref="dropdown"><IconMenu class="w-7 h-7" /></label>

					<ul tabindex="0" class="p-2 shadow w-52 rounded-2xl bg-neutral-100">
						<li class="hover:bg-neutral-200 cursor-pointer py-3 my-1" @mousedown.prevent @click="loseFocus">
							<a href="/" class="flex w-full h-full uppercase font-bold lg:text-base text-sm justify-center">
								Início
							</a>
						</li>
						<li class="hover:bg-neutral-200 cursor-pointer py-3 my-1" @mousedown.prevent @click="loseFocus">
							<a href="#destaques" class="flex w-full h-full uppercase font-bold lg:text-base text-sm justify-center">
								Destaques
							</a>
						</li>
						<li class="hover:bg-neutral-200 cursor-pointer py-3 my-1" @mousedown.prevent @click="loseFocus">
							<a href="#empresa" class="flex w-full h-full uppercase font-bold lg:text-base text-sm justify-center">
								Empresa
							</a>
						</li>
						<li class="hover:bg-neutral-200 cursor-pointer py-3 my-1" @mousedown.prevent @click="loseFocus">
							<a href="#materiais" class="flex w-full h-full uppercase font-bold lg:text-base text-sm justify-center">
								Materiais
							</a>
						</li>
						<li class="hover:bg-neutral-200 cursor-pointer py-3 my-1" @mousedown.prevent @click="loseFocus">
							<a href="#equipe" class="flex w-full h-full uppercase font-bold lg:text-base text-sm justify-center">
								Equipe
							</a>
						</li>
						<li class="hover:bg-neutral-200 cursor-pointer py-3 my-1" @mousedown.prevent @click="loseFocus">
							<a href="#contato" class="flex w-full h-full uppercase font-bold lg:text-base text-sm justify-center">
								Contato
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="lg:block hidden mx-3 hover-down">
				<a href="/" class="p-2 uppercase font-bold lg:text-base text-sm">Início</a>
			</div>

			<div class="lg:block hidden mx-3 hover-down">
				<a href="#destaques" class="p-2 uppercase font-bold lg:text-base text-sm">Destaques</a>
			</div>

			<div class="lg:block hidden mx-3 hover-down">
				<a href="#empresa" class="p-2 uppercase font-bold lg:text-base text-sm">Empresa</a>
			</div>

			<a href="/" class="p-2 uppercase font-bold lg:text-base text-sm">
				<img alt="Vue logo" src="@/assets/logo.svg" class="max-h-24 h-full w-full pointer-events-none" />
			</a>

			<div class="lg:block hidden mx-3 hover-down">
				<a href="#materiais" class="p-2 uppercase font-bold lg:text-base text-sm">Materiais</a>
			</div>

			<div class="lg:block hidden mx-3 hover-down">
				<a href="#equipe" class="p-2 uppercase font-bold lg:text-base text-sm">Equipe</a>
			</div>

			<div class="lg:block hidden mx-3 hover-down">
				<a href="#contato" class="p-2 uppercase font-bold lg:text-base text-sm">Contato</a>
			</div>

			<div class="flex absolute right-0 top-[50%] translate-y-[-50%] select-none mr-2">
				<a
					href="https://www.instagram.com"
					target="_blank"
					class="flex flex-col justify-center items-center text-center p-2 hover-down"
				>
					<IconInstagram class="w-7 h-7" />
				</a>

				<a
					href="https://www.facebook.com"
					target="_blank"
					class="flex flex-col justify-center items-center text-center p-2 hover-down"
				>
					<IconFacebook class="w-7 h-7" />
				</a>
			</div>
		</nav>
	</header>
</template>

<style scoped>
.dropdown {
	position: relative;
	display: inline-block;
}

.dropdown:focus-within ul {
	visibility: visible;
	opacity: 1;
	transform: translate(0, 0) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1);
}

.dropdown ul {
	visibility: hidden;
	position: absolute;
	left: 0;
	z-index: 50;
	opacity: 0;
	transform-origin: top;
	transform: translate(0, 0) rotate(0) skew(var(0)) skewY(var(0)) scaleX(0.95) scaleY(0.95);
	transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter,
		-webkit-text-decoration-color, -webkit-backdrop-filter;
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow,
		transform, filter, backdrop-filter;
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow,
		transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
	transition-duration: 0.2s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown > *:focus {
	outline: 2px solid transparent;
	outline-offset: 2px;
}
</style>
