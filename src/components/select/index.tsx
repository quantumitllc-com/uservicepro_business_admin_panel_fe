/* eslint-disable react/destructuring-assignment */
import MyLabel from "components/label"
import { Pane } from "evergreen-ui"
import ReactSelect, { components } from "react-select"
import { Control, Controller } from "react-hook-form"
import { ReactComponent as Down } from "./down.svg"

interface ISelect {
	label?: string
	isLoading?: boolean
	placeholder?: string
	options?: { value?: any; label?: any; name?: any }[]
	name: string
	control?: Control<any>
	disabled?: boolean
}

const DropdownIndicator = (props: any) => (
	<components.DropdownIndicator {...props}>
		<Down />
	</components.DropdownIndicator>
)

export const Select = ({
	label,
	isLoading,
	options = [],
	placeholder = "None selected",
	control,
	name,
	disabled,
}: ISelect) => {
	const a = 1
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState: { errors } }) => {
				return (
					<Pane
						display="flex"
						width="fit-content"
						flexDirection="column"
						height={40}
					>
						{label && <MyLabel marginBottom={8}>{label}</MyLabel>}
						<ReactSelect
							{...field}
							isDisabled={disabled}
							options={options}
							isLoading={isLoading}
							placeholder={placeholder}
							components={{
								DropdownIndicator,
								IndicatorSeparator: () => null,
							}}
							styles={{
								control: (baseStyles, state) => ({
									...baseStyles,
									backgroundColor: "var(--light-grey)",
									width: "max-content",
									height: "40px",
									minHeight: "40px",
									borderWidth: "1.28927px",
									borderRadius: "5.15708px",
									outline: "none",
									borderColor: state.isFocused
										? "#9DB5FF"
										: "#D8DAE5",
									"*": {
										boxShadow: "none !important",
									},
									boxShadow: state.isFocused
										? "0px 0px 0px 2px #D6E0FF"
										: "none",
									"&:hover": {
										borderColor: "#9DB5FF",
										outline: "none",
									},
								}),
								valueContainer: (provided) => ({
									...provided,
									height: "40px",
									minHeight: "40px",
								}),
								placeholder: (base) => ({
									...base,
									fontSize: "1em",
									fontWeight: 400,
									color: "#696F8C",
									whiteSpace: "nowrap",
								}),
								indicatorsContainer: (provided) => ({
									...provided,
									height: "40px",
									minHeight: "40px",
								}),

								option: (
									styles,
									{ isDisabled, isSelected },
								) => ({
									...styles,
									cursor: isDisabled
										? "not-allowed"
										: "pointer",
									backgroundColor: isSelected
										? "#3D8798"
										: "white",
									"&:hover": {
										backgroundColor: isSelected
											? "#3D8798"
											: "#DFF9FF",
									},
								}),
							}}
						/>
					</Pane>
				)
			}}
		/>
	)
}
