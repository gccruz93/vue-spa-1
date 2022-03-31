<template>
	<div class="flex flex-col items-center w-full max-w-sm mx-auto py-16">
		<p class="text-2xl mb-10 font-bold">FALE CONOSCO</p>

		<form action="">
			<input type="text" class="w-full" placeholder="NOME" />
			<input type="text" class="w-full" placeholder="E-MAIL" />
			<input type="text" class="w-full" placeholder="ASSUNTO" />
			<textarea class="w-full" rows="4" placeholder="MENSAGEM" />

			<button class="w-32 py-2 mx-auto">ENVIAR</button>
		</form>
	</div>
</template>

<style scoped>
form,
p {
	color: var(--dark-blue);
}
</style>
