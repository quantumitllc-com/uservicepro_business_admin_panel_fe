import { defaultTheme, mergeTheme } from "evergreen-ui"

const theme = mergeTheme(defaultTheme, {
	colors: {
		muted: "var(--grey)",
	},
	fontFamilies: {
		display: "var(--lexend)",
		mono: "var(--sf)",
		ui: "var(--sf)",
	},
	components: {
		Button: {
			baseStyle: {
				borderRadius: "6px",
				fontWeight: "400px",
			},
			appearances: {
				primary: {
					color: "var(--white)",
					backgroundColor: "var(--dark-green)",
					_hover: {
						backgroundColor: "var(--light-green)",
						border: "1px solid var(--black-green)",
					},
					// _focus: {
					// backgroundColor: "var(--black-green)",
					// },
					// paddingY: 12,
					// paddingX: 120,
					// borderRadius: 5,
					// _active: {
					// backgroundColor: 'darkred',
					// },
				},
				outlined: {
					backgroundColor: "var(--white)",
					border: "1px solid var(--dark-white)",
					boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
					_hover: {
						border: "1px solid var(--grey)",
					},
				},
			},
		},
		Input: {
			baseStyle: {
				borderRadius: "6px",
			},
		},
		Checkbox: {
			baseStyle: {
				_checked: {
					backgroundColor: "var(--dark-green)!important",
				},
			},
		},
	},
})

export default theme
