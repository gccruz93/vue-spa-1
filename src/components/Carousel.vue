<script setup>
import { reactive, computed } from "vue";
import IconChevronLeft from "@/components/icons/IconChevronLeft.vue";
import IconChevronRight from "@/components/icons/IconChevronRight.vue";

const props = defineProps({
	items: Object,
	timer: {
		type: Number,
		default: 10000,
	},
	"background-color": {
		type: String,
		default: "",
	},
});

const state = reactive({
	slide: 0,
	interval: null,
});

const style = computed(() => {
	return props.backgroundColor ? `background-color: ${props.backgroundColor}` : "";
});

function previous() {
	startInterval();

	if (state.slide == 0) {
		state.slide = props.items.length - 1;
		return;
	}

	state.slide--;
}

function next(interval = true) {
	if (interval) startInterval();

	if (state.slide == props.items.length - 1) {
		state.slide = 0;
		return;
	}

	state.slide++;
}

function startInterval() {
	clearInterval(state.interval);

	state.interval = setInterval(() => {
		next(false);
	}, props.timer);
}

startInterval();
</script>

<template>
	<div class="relative" :style="style">
		<div class="relative overflow-hidden h-full bg-white">
			<div
				v-for="(item, key) in props.items"
				:key="'carousel-' + key"
				class="duration-700 ease-in-out h-full transition-opacity"
				:class="{ 'opacity-0': key != state.slide }"
			>
				<img
					:src="item.src"
					:alt="item.alt"
					class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
				/>
			</div>
		</div>

		<button
			type="button"
			class="flex justify-center items-center absolute top-0 left-0 z-30 w-24 h-full cursor-pointer bg-opacity-30 hover:bg-opacity-20 hover:bg-white text-white group"
			@click="previous"
		>
			<div class="bg-white rounded-full p-3 bg-opacity-20 group-hover:bg-transparent">
				<IconChevronLeft class="h-10 w-10" />
			</div>
		</button>
		<button
			type="button"
			class="flex justify-center items-center absolute top-0 right-0 z-30 w-24 h-full cursor-pointer bg-opacity-30 hover:bg-opacity-20 hover:bg-white text-white group"
			@click="next"
		>
			<div class="bg-white rounded-full p-3 bg-opacity-20 group-hover:bg-transparent">
				<IconChevronRight class="h-10 w-10" />
			</div>
		</button>
	</div>
</template>
