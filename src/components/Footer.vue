<script setup>
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
</script>

<template>
	<footer class="pt-8 pb-4 px-2 text-white">
		<div class="grid grid-flow-row lg:grid-flow-col gap-14 max-w-7xl mx-auto">
			<div class="flex justify-center items-center">
				<img alt="Vue logo" src="@/assets/logo.svg" class="max-h-24 h-full w-full pointer-events-none" />
			</div>

			<div class="flex flex-col justify-center items-center">
				<p class="text-lg font-bold mb-1 text-center">LINKS:</p>

				<div class="grid grid-cols-2 gap-x-8 w-72 mx-auto text-left pl-10">
					<a href="/" class="p-1 text-sm hover:text-neutral-300">INÍCIO</a>
					<a href="#materiais" class="p-1 text-sm hover:text-neutral-300">MATERIAIS</a>
					<a href="#destaques" class="p-1 text-sm hover:text-neutral-300">DESTAQUES</a>
					<a href="#equipe" class="p-1 text-sm hover:text-neutral-300">EQUIPE</a>
					<a href="#empresa" class="p-1 text-sm hover:text-neutral-300">EMPRESA</a>
					<a href="#contato" class="p-1 text-sm hover:text-neutral-300">CONTATO</a>
				</div>
			</div>

			<div class="flex flex-col justify-center items-center lg:items-start">
				<p class="text-lg font-bold mb-1 text-center">ENDEREÇO:</p>

				<p class="text-sm leading-4">LOREM IPSUM DOLOR SIT AMET</p>
				<p class="text-sm leading-4">CONSECTETUR ADIPISCING ELIT</p>
				<p class="text-sm leading-4">CACHOEIRO DE ITAPEMIRIM - ES</p>

				<p class="text-sm mt-2 mb-4">29000-000</p>

				<p class="text-sm leading-4">BRASIL</p>
				<p class="text-sm leading-4">+55 27 0000 0000</p>
				<p class="text-sm leading-4">email@gmail.com</p>
			</div>

			<div class="flex flex-col justify-center items-center">
				<p class="text-lg font-bold mb-1 text-center">SIGA-NOS:</p>

				<div class="flex justify-center select-none">
					<a
						href="https://www.instagram.com"
						target="_blank"
						class="flex flex-col justify-center items-center text-center p-2 hover:text-neutral-300"
					>
						<IconInstagram class="w-7 h-7" />
					</a>

					<a
						href="https://www.facebook.com"
						target="_blank"
						class="flex flex-col justify-center items-center text-center p-2 hover:text-neutral-300"
					>
						<IconFacebook class="w-7 h-7" />
					</a>
				</div>
			</div>
		</div>

		<p class="text-sm mt-14 text-center">© TODOS OS DIREITOS RESERVADOS. GC.</p>
	</footer>
</template>
