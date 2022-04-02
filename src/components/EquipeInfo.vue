<script setup>
import IconPhone from "@/components/icons/IconPhone.vue";
import IconMail from "@/components/icons/IconMail.vue";

const props = defineProps({
	name: String,
	role: String,
	phone: String,
	email: String,
});
</script>

<template>
	<div>
		<div class="flex flex-col opacity-50 w-64 py-2 bg-primary text-white text-center">
			<p class="font-bold uppercase">{{ props.name }}</p>
			<p class="uppercase">{{ props.role }}</p>
		</div>
		<div class="flex flex-col bg-white text-primary text-center">
			<a :href="'tel:' + props.phone" class="font-bold flex justify-center items-center hover:text-black">
				<IconPhone class="mr-2" />
				{{ props.phone }}
			</a>
			<a :href="'mailto:' + props.email" class="flex justify-center items-center hover:text-black">
				<IconMail class="mr-2" />
				{{ props.email }}
			</a>
		</div>
	</div>
</template>
