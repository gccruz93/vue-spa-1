<template>
	<div style="bottom: 0; left: 0; right: 0; height: 9rem; width: 100%; z-index: -1">
		<div class="h-full overflow-hidden">
			<svg viewBox="0 0 500 150" preserveAspectRatio="none">
				<path
					style="fill: var(--primary)"
					d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
				/>
			</svg>
		</div>
	</div>
</template>

<style scoped>
svg {
	height: 100%;
	width: 100%;
}

@media (max-width: 768px) {
	svg {
		width: 160%;
	}
}
</style>
