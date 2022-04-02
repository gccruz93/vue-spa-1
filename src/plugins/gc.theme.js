const plugin = require("tailwindcss/plugin");

module.exports = plugin.withOptions(function (options) {
	return function ({ addBase, addComponents, addUtilities, theme }) {
		addComponents({
			".hover-down": {
				transitionDuration: "100ms",
			},
			".hover-down:hover": {
				transform:
					"translate(var(--tw-translate-x), 2px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
			},

			".btn": {
				padding: "0.5rem 1rem",
			},
			".btn-primary": {
				backgroundColor: "var(--primary)",
				color: "white",
			},

			".form-control": {
				display: "flex",
				flexDirection: "column",
			},

			"animate-underline": {
				position: "relative",
			},

			dropdown: {
				position: "relative",
				display: "inline-block",
			},
		});

		addUtilities({
			".bg-primary": {
				backgroundColor: "var(--primary)",
			},
		});
	};
});
