<template>
	<div id="contato" class="flex flex-col items-center w-full max-w-sm mx-auto pt-16 pb-8 relative">
		<p class="text-2xl mb-10 font-bold">FALE CONOSCO</p>

		<form action="" @submit.prevent>
			<div class="form-control">
				<input type="text" class="w-full px-4 py-2 border rounded" placeholder="Nome" required />
			</div>

			<div class="form-control">
				<input type="email" class="w-full px-4 py-2 border rounded" placeholder="E-mail" required />
			</div>

			<div class="form-control">
				<input type="text" class="w-full px-4 py-2 border rounded" placeholder="Assunto" />
			</div>

			<div class="form-control">
				<textarea rows="4" class="w-full px-4 py-2 border rounded" placeholder="Mensagem" required />
			</div>

			<div class="form-control">
				<button class="btn btn-primary rounded-full w-32 mx-auto">ENVIAR</button>
			</div>
		</form>
	</div>
</template>
