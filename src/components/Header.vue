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
		class="fixed lg:flex lg:relative top-0 left-0 right-0 mx-auto max-w-7xl lg:h-40 h-14 bg-white lg:bg-transparent bg-opacity-80 z-40"
	>
		<nav class="h-full flex flex-row items-center justify-center max-w-4xl mx-auto select-none">
			<div class="lg:hidden absolute left-2 top-[50%] translate-y-[-50%]">
				<div class="dropdown">
					<label tabindex="0" class="flex m-1 p-2 cursor-pointer" ref="dropdown">
						<IconMenu class="w-7 h-7" />
					</label>

					<ul tabindex="0">
						<li @mousedown.prevent @click="loseFocus">
							<a href="/"> Início </a>
						</li>
						<li @mousedown.prevent @click="loseFocus">
							<a href="#destaques"> Destaques </a>
						</li>
						<li @mousedown.prevent @click="loseFocus">
							<a href="#empresa"> Empresa </a>
						</li>
						<li @mousedown.prevent @click="loseFocus">
							<a href="#materiais"> Materiais </a>
						</li>
						<li @mousedown.prevent @click="loseFocus">
							<a href="#equipe"> Equipe </a>
						</li>
						<li @mousedown.prevent @click="loseFocus">
							<a href="#contato"> Contato </a>
						</li>
					</ul>
				</div>
			</div>

			<div class="lg:block hidden mx-3 hover-down">
				<a href="/" class="p-2 uppercase animate-underline font-bold lg:text-base text-sm">Início</a>
			</div>

			<div class="lg:block hidden mx-3 hover-down">
				<a href="#destaques" class="p-2 uppercase animate-underline font-bold lg:text-base text-sm">Destaques</a>
			</div>

			<div class="lg:block hidden mx-3 hover-down">
				<a href="#empresa" class="p-2 uppercase animate-underline font-bold lg:text-base text-sm">Empresa</a>
			</div>

			<div class="mx-3">
				<a
					href="/"
					class="p-2 uppercase font-bold lg:text-base text-sm h-14 lg:h-full flex justify-center items-center"
				>
					<img alt="Vue logo" src="@/assets/logo.svg" class="max-h-24 h-full w-full pointer-events-none" />
				</a>
			</div>

			<div class="lg:block hidden mx-3 hover-down">
				<a href="#materiais" class="p-2 uppercase animate-underline font-bold lg:text-base text-sm">Materiais</a>
			</div>

			<div class="lg:block hidden mx-3 hover-down">
				<a href="#equipe" class="p-2 uppercase animate-underline font-bold lg:text-base text-sm">Equipe</a>
			</div>

			<div class="lg:block hidden mx-3 hover-down">
				<a href="#contato" class="p-2 uppercase animate-underline font-bold lg:text-base text-sm">Contato</a>
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
